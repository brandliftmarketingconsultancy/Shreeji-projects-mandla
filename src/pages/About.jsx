
import { Helmet } from 'react-helmet-async'
import AboutHero from '../components/sections/AboutHero.jsx'
import WhoWeAre from '../components/sections/WhoWeAre.jsx'
import AboutStats from '../components/sections/AboutStats.jsx'
import WhyPartner from '../components/sections/WhyPartner.jsx'
import CertificationsApproved from '../components/sections/CertificationsApproved.jsx'
import AboutCTA from '../components/sections/AboutCTA.jsx'
import { socialLinks } from '../data/navigation.js'

const siteUrl = 'https://shreeji-projects-mandla.vercel.app'

export default function About() {
  const sameAs = socialLinks
    .filter((item) => ['facebook', 'instagram', 'linkedin', 'youtube'].includes(item.icon?.toLowerCase()))
    .map((item) => item.href)
    .filter(Boolean)

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shreeji Projects',
    url: siteUrl,
    telephone: '+91 7067062323',
    email: 'shreejiprojectsmandla@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Beside Axis Bank, Jabalpur Road',
      addressLocality: 'Mandla',
      addressRegion: 'Madhya Pradesh',
      postalCode: '481661',
      addressCountry: 'IN',
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
    // Add the verified public logo URL here when available:
    // logo: `${siteUrl}/images/your-actual-logo.png`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About Us',
        item: `${siteUrl}/about`,
      },
    ],
  }

  return (
    <>
      <Helmet>
        <title>
          About Shreeji Projects | AAC Blocks Company in Mandla, MP
        </title>

        <meta
          name="description"
          content="Shreeji Projects is an ISO 9001:2015 certified AAC blocks company in Mandla, MP. Learn about our factory, product range, certifications and approvals."
        />

        <meta
          name="keywords"
          content="aac blocks company, aac blocks factory mandla, bricks manufacturer mandla, brick manufacturing company mp, aac block manufacturing company, aac block plant, aac blocks manufacturer madhya pradesh, aac block supplier"
        />

        <link rel="canonical" href={`${siteUrl}/about`} />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <AboutHero />
      <WhoWeAre />
      <AboutStats />
      <WhyPartner />
      <CertificationsApproved />
      <AboutCTA />
    </>
  )
}
