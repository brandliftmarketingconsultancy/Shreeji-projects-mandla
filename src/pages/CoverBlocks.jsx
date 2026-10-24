
import { Helmet } from 'react-helmet-async'

import CoverHero from '../components/sections/CoverHero.jsx'
import CoverTypes from '../components/sections/CoverTypes.jsx'
import CoverSizes from '../components/sections/CoverSizes.jsx'
import CoverTechSpecs from '../components/sections/CoverTechSpecs.jsx'
import CoverFaq from '../components/sections/CoverFaq.jsx'
import CoverCta from '../components/sections/CoverCta.jsx'
import RelatedProducts from '../components/sections/RelatedProducts.jsx'

export default function CoverBlocks() {
  return (
    <>
      <Helmet>
        <title>RCC Cover Blocks in Mandla, MP | Shreeji Projects</title>

        <meta
          name="description"
          content="Precast RCC cover blocks (spacer blocks) from Shreeji Projects, Mandla. M25 grade, 20 mm to 75 mm cover sizes for slabs, beams and columns. Get a quote."
        />

        <meta
          name="keywords"
          content="cover blocks, rcc cover block, cement cover block, spacer blocks, cover blocks manufacturer mandla, concrete spacer blocks, cement block spacers, column cover block, cover block in slab, cover block in footing, reinforcement cover block, spacer blocks for reinforcement, concrete cover blocks mp, cover blocks for construction mandla, cover block near me, cover blocks supplier near me"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://shreeji-projects-mandla.vercel.app/products/cover-blocks"
        />
      </Helmet>

      <CoverHero />
      <CoverTypes />
      <CoverSizes />
      <CoverTechSpecs />
      <CoverFaq />
      <RelatedProducts pageKey="cover-blocks" />
      <CoverCta />
    </>
  )
}
