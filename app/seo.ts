const fallbackSiteUrl = 'http://localhost:3000'

const normalizeSiteUrl = (url: string | undefined): string => {
  try {
    return new URL(url || fallbackSiteUrl).origin
  } catch {
    return fallbackSiteUrl
  }
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)

export const siteTitle = 'Wenduo Wang | Full-stack Developer'

export const siteDescription =
  'Full-stack developer in Australia building React, Next.js, Node.js, and Django applications.'

export const siteName = 'Wenduo Wang Portfolio'

export const personName = 'Wenduo Wang'

export const profileLinks = [
  'https://www.linkedin.com/in/wenduo-wang-cs',
  'https://github.com/shuttle666',
]

export const seoKeywords = [
  'Wenduo Wang',
  'Full-stack Developer',
  'Full Stack Developer Australia',
  'React Developer',
  'Next.js Developer',
  'Node.js Developer',
  'TypeScript Developer',
  'Django Developer',
  'Portfolio',
]

const profileImageUrl = `${siteUrl}/og-image.png`

export const profileJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: personName,
      url: siteUrl,
      image: profileImageUrl,
      email: 'mailto:wenduohb@gmail.com',
      jobTitle: 'Full-stack Developer',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'AU',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Adelaide',
      },
      knowsAbout: seoKeywords,
      sameAs: profileLinks,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: {
        '@id': `${siteUrl}/#person`,
      },
      inLanguage: 'en-AU',
    },
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profile-page`,
      url: siteUrl,
      name: siteTitle,
      description: siteDescription,
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#person`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: profileImageUrl,
      },
      inLanguage: 'en-AU',
    },
  ],
}
