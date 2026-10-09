import Hero from '../components/sections/Hero.jsx'
import RibbedFaceHighlight from '../components/sections/RibbedFaceHighlight.jsx'
import Features from '../components/sections/Features.jsx'
import Products from '../components/sections/Products.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'
import { Helmet } from 'react-helmet-async'
import AffordablePromo from '../components/sections/AffordablePromo.jsx'
import WeightComparison from '../components/sections/WeightComparison.jsx'
import { site } from '../data/site.js'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{site.metaTitle}</title>
        <meta name="description" content={site.metaDescription} />
        <meta
          name="keywords"
          content={[...site.primaryKeywords, ...site.secondaryKeywords].join(', ')}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${site.siteUrl}/`} />

        {/* Open Graph (WhatsApp, Facebook, LinkedIn previews) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={site.metaTitle} />
        <meta property="og:description" content={site.metaDescription} />
        <meta property="og:url" content={`${site.siteUrl}/`} />
        {/* <meta property="og:image" content={`${site.siteUrl}${site.ogImage}`} /> */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.metaTitle} />
        <meta name="twitter:description" content={site.metaDescription} />
        {/* <meta name="twitter:image" content={`${site.siteUrl}${site.ogImage}`} /> */}
      </Helmet>
      <Hero />
      <RibbedFaceHighlight />
      <Features />
      <Products />
      <WhyChooseUs />
      <AffordablePromo />
      <WeightComparison />
    </>
  )
}
