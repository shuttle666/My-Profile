import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const MAX_MESSAGE_LENGTH = 3000
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type RateLimitEntry = {
  count: number
  resetAt: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()

function jsonResponse(message: string, status: number, success = false) {
  return NextResponse.json({ success, message }, { status })
}

function getString(formData: FormData, fieldName: string): string {
  const value = formData.get(fieldName)
  return typeof value === 'string' ? value.trim() : ''
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown'
  }

  return request.headers.get('x-real-ip') || 'unknown'
}

function pruneExpiredRateLimits(now: number): void {
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key)
    }
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  pruneExpiredRateLimits(now)

  const currentEntry = rateLimitStore.get(ip)
  if (!currentEntry) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return false
  }

  currentEntry.count += 1
  return currentEntry.count > RATE_LIMIT_MAX_REQUESTS
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = getString(formData, 'name')
  const email = getString(formData, 'email')
  const message = getString(formData, 'message')
  const company = getString(formData, 'company')

  if (company) {
    return jsonResponse('Form submitted successfully.', 200, true)
  }

  if (isRateLimited(getClientIp(request))) {
    return jsonResponse('Too many submissions. Please try again later.', 429)
  }

  if (!name || !email || !message) {
    return jsonResponse('Please fill in your name, email, and message.', 400)
  }

  if (!EMAIL_PATTERN.test(email)) {
    return jsonResponse('Please enter a valid email address.', 400)
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return jsonResponse('Please keep your message under 3000 characters.', 400)
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY
  if (!accessKey) {
    return jsonResponse('Contact form is not configured yet.', 500)
  }

  const web3FormsData = new FormData()
  web3FormsData.append('access_key', accessKey)
  web3FormsData.append('name', name)
  web3FormsData.append('email', email)
  web3FormsData.append('message', message)

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    body: web3FormsData,
  })

  const data = (await response.json()) as { success?: boolean; message?: string }
  if (!response.ok || !data.success) {
    return jsonResponse(data.message || 'Failed to submit the form.', 502)
  }

  return jsonResponse('Form submitted successfully.', 200, true)
}
