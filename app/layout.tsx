import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Outfit, Ovo } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import {
  personName,
  profileJsonLd,
  seoKeywords,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from './seo'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  publisher: personName,
  keywords: seoKeywords,
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: '/',
    siteName,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wenduo Wang portfolio preview',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
  },
}

type RootLayoutProps = Readonly<{
  children: ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => {
  try {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle(
      'dark',
      storedTheme === 'dark' || (storedTheme !== 'light' && prefersDark)
    );
  } catch {
  }
})();`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
