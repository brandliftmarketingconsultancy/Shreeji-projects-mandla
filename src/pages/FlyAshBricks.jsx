
import { Helmet } from 'react-helmet-async'

import FlyAshHero from '../components/sections/FlyAshHero.jsx'
import FlyAshWhyConecc from '../components/sections/FlyAshWhyConecc.jsx'
import FlyAshBenefits from '../components/sections/FlyAshBenefits.jsx'
import FlyAshTechSpecs from '../components/sections/FlyAshTechSpecs.jsx'
import FlyAshComparison from '../components/sections/FlyAshComparison.jsx'
import FlyAshFaq from '../components/sections/FlyAshFaq.jsx'
import FlyAshCta from '../components/sections/FlyAshCta.jsx'
import RelatedProducts from '../components/sections/RelatedProducts.jsx'

export default function FlyAshBricks() {
  return (
    <>
      <Helmet>
        <title>Fly Ash Bricks Manufacturer in Mandla, MP | Shreeji Projects</title>

        <meta
          name="description"
          content="Fly ash bricks made in Mandla, MP. 7.5 to 10 N/mm² strength, low water absorption and a uniform 230 x 110 x 75 mm size. Get a free quote."
        />

        <meta
          name="keywords"
          content="fly ash bricks, fly ash bricks mandla, fly ash bricks manufacturer mp, fly ash brick manufacturers near me, fly ash bricks manufacturing, fly ash block manufacturers, fly ash bricks supplier madhya pradesh, fly ash brick supplier, eco friendly fly ash bricks, 9 inch fly ash bricks, bricks manufacturer, brick suppliers"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://shreeji-projects-mandla.vercel.app/products/fly-ash-bricks"
        />
      </Helmet>

      <FlyAshHero />
      <FlyAshWhyConecc />
      <FlyAshBenefits />
      <FlyAshTechSpecs />
      <FlyAshComparison />
      <FlyAshFaq />
      <RelatedProducts pageKey="fly-ash-bricks" />
      <FlyAshCta />
    </>
  )
}
