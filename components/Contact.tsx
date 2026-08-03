'use client'

import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets'
import { motion } from 'motion/react'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
const FIELD_CLASS_NAME =
  'w-full rounded-md border border-gray-400 bg-white px-4 py-3 text-gray-950 transition placeholder:text-gray-500 focus-visible:border-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:border-white/70 dark:bg-darkHover/30 dark:text-white dark:placeholder:text-white/60 dark:focus-visible:border-blue-300 dark:focus-visible:ring-blue-300 dark:focus-visible:ring-offset-darkTheme'

const Contact = () => {
  const [result, setResult] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (!WEB3FORMS_ACCESS_KEY) {
      setResult('Contact form is not configured yet.')
      return
    }

    formData.append('access_key', WEB3FORMS_ACCESS_KEY)

    try {
      setIsSubmitting(true)
      setResult('Sending...')

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      const data = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !data.success) {
        setResult(data.message || 'Failed to submit the form.')
        return
      }

      setResult('Form submitted successfully.')
      form.reset()
    } catch (error) {
      console.error('Form submission failed', error)
      setResult('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      id="contact"
      aria-labelledby="contact-heading"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/backgrounds/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      <motion.p
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.p>

      <motion.h2
        id="contact-heading"
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.35 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.35 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use
        the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.35 }}
        onSubmit={onSubmit}
        aria-labelledby="contact-heading"
        className="max-w-2xl mx-auto"
      >
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          className="hidden"
          aria-hidden="true"
        />

        <div className="mt-10 mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              maxLength={100}
              required
              className={FIELD_CLASS_NAME}
            />
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.24, duration: 0.3 }}
          >
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              maxLength={254}
              required
              className={FIELD_CLASS_NAME}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.3 }}
          className="mb-6"
        >
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            maxLength={3000}
            placeholder="Tell me about the role or project"
            required
            className={FIELD_CLASS_NAME}
          />
        </motion.div>

        <motion.button
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          type="submit"
          className="mx-auto flex w-max cursor-pointer items-center justify-between gap-2 rounded-full bg-black/80 px-8 py-3 text-white duration-500 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 dark:border dark:border-white/70 dark:bg-transparent dark:hover:bg-darkHover dark:focus-visible:ring-blue-300 dark:focus-visible:ring-offset-darkTheme"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit now'}{' '}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.button>

        <p
          id="contact-form-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="mt-4 min-h-8 text-center text-sm text-gray-700 dark:text-white/80"
        >
          {result}
        </p>
      </motion.form>
    </motion.section>
  )
}

export default Contact
