import FencingHero from '../components/sections/FencingHero.jsx'
import FencingSizes from '../components/sections/FencingSizes.jsx'
import FencingApplications from '../components/sections/FencingApplications.jsx'
import FencingUseCases from '../components/sections/FencingUseCases.jsx'
import FencingFaq from '../components/sections/FencingFaq.jsx'
import FencingCta from '../components/sections/FencingCta.jsx'
import RelatedProducts from '../components/sections/RelatedProducts.jsx'
import { Helmet } from 'react-helmet-async'

export default function FencingPole() {
  return (
    <>
    
<Helmet>
  <title>RCC Fencing Poles in Mandla, MP | Shreeji Projects</title>

  <meta
    name="description"
    content="Strong, weather-resistant RCC fencing poles from Shreeji Projects, Mandla. 5 ft to 10 ft lengths for farms, plots and industrial sites. Get a free quote."
  />

  <meta
    name="keywords"
    content="fencing pole, rcc fencing pole, rcc fencing pole mandla, fencing pole manufacturer mandla, concrete fencing pole mp, concrete fence pole, rcc fence pole, rcc cement pole, reinforced concrete fence posts, rcc fencing pole near me, rcc pole near me, fencing pole supplier near me"
  />

  <meta name="robots" content="index, follow" />

  <link
    rel="canonical"
    href="https://shreeji-projects-mandla.vercel.app/products/fencing-poles"
  />
</Helmet>

      <FencingHero />
      <FencingSizes />
      <FencingApplications />
      <FencingUseCases />
      <FencingFaq />
      <RelatedProducts pageKey="fencing-poles" />
      <FencingCta />
    </>
  )
}