
import { Helmet } from 'react-helmet-async'

import PaverHero from '../components/sections/PaverHero.jsx'
import PaverApplications from '../components/sections/PaverApplications.jsx'
import PaverGallery from '../components/sections/PaverGallery.jsx'
import PaverFaq from '../components/sections/PaverFaq.jsx'
import PaverCta from '../components/sections/PaverCta.jsx'
import RelatedProducts from '../components/sections/RelatedProducts.jsx'

export default function PaverBlocks() {
  return (
    <>
      <Helmet>
        <title>Interlocking Paver Blocks in Mandla, MP | Shreeji Projects</title>

        <meta
          name="description"
          content="Durable interlocking paver blocks from Shreeji Projects, Mandla. I-shape, zigzag, hexagon and rectangular designs in 5 colours. Get a free quote."
        />

        <meta
          name="keywords"
          content="paver blocks, paver blocks mandla, interlocking paver blocks mandla, paver blocks manufacturer mp, interlocking blocks, interlocking bricks near me, paver blocks near me, concrete paving bricks, paver block suppliers near me, paver block company, brick paver manufacturers, patio blocks"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://shreeji-projects-mandla.vercel.app/products/paver-blocks"
        />
      </Helmet>

      <PaverHero />
      <PaverApplications />
      <PaverGallery />
      <PaverFaq />
      <RelatedProducts pageKey="paver-blocks" />
      <PaverCta />
    </>
  )
}
