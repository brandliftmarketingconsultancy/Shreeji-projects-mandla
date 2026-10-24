
import { Helmet } from 'react-helmet-async'

import AacHero from '../components/sections/AacHero.jsx'
import AacWhyConecc from '../components/sections/AacWhyConecc.jsx'
import AacFeatures from '../components/sections/AacFeatures.jsx'
import AacBlockSizes from '../components/sections/AacBlockSizes.jsx'
import AacTechSpecs from '../components/sections/AacTechSpecs.jsx'
import AacComparison from '../components/sections/AacComparison.jsx'
import AacFaq from '../components/sections/AacFaq.jsx'
import AacCta from '../components/sections/AacCta.jsx'
import RelatedProducts from '../components/sections/RelatedProducts.jsx'

export default function AacBlocks() {
  return (
    <>
      <Helmet>
        <title>AAC Blocks in Mandla, MP: Sizes and Specs | Shreeji Projects</title>

        <meta
          name="description"
          content="Buy ISI-certified AAC blocks from Shreeji Projects, Mandla. Sizes from 75 mm to 300 mm, 4 N/mm² strength, 4-hour fire rating. Get a quote today."
        />

        <meta
          name="keywords"
          content="aac blocks, aac blocks mandla, aac bricks, aerated autoclaved concrete, aac light weight block, aac building blocks, aerated blocks for external walls, aac blocks vs red bricks, 4 inch aac block, 6 inch aac block, 8 inch aac block, 9 inch aac block, 75mm aerated blocks, aac block supplier, aac blocks company"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://shreeji-projects-mandla.vercel.app/products/aac-blocks"
        />
      </Helmet>

      <AacHero />
      <AacWhyConecc />
      <AacFeatures />
      <AacBlockSizes />
      <AacTechSpecs />
      <AacComparison />
      <AacFaq />
      <RelatedProducts pageKey="aac-blocks" />
      <AacCta />
    </>
  )
}
