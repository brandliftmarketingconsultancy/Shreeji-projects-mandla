import Hero from '../components/sections/Hero.jsx'
import RibbedFaceHighlight from '../components/sections/RibbedFaceHighlight.jsx'
import Features from '../components/sections/Features.jsx'
import Products from '../components/sections/Products.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'
import { Helmet } from 'react-helmet-async'
import AffordablePromo from '../components/sections/AffordablePromo.jsx'
import WeightComparison from '../components/sections/WeightComparison.jsx'

export default function Home() {
  return (
    <>
    <Helmet>
  <title>AAC Blocks Manufacturer in Mandla, MP | Shreeji Projects</title>

  <meta
    name="description"
    content="Leading AAC blocks manufacturer in Mandla, MP. ISI-certified lightweight AAC blocks, fly ash bricks, paver blocks and more. Call for a free quote."
  />

  <meta
    name="keywords"
    content="aac blocks manufacturer, aac blocks manufacturer mandla, aac blocks manufacturer madhya pradesh, aac blocks mandla, aac blocks supplier mp, lightweight aac blocks mandla, aac blocks vs red bricks, fly ash bricks, paver blocks, cover blocks, rcc fencing pole, bricks manufacturer"
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <link
    rel="canonical"
    href="https://shreeji-projects-mandla.vercel.app/"
  />
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
