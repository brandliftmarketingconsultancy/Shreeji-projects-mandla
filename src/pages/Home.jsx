import Hero from '../components/sections/Hero.jsx'
import RibbedFaceHighlight from '../components/sections/RibbedFaceHighlight.jsx'
import Features from '../components/sections/Features.jsx'
import Products from '../components/sections/Products.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'
import AffordablePromo from '../components/sections/AffordablePromo.jsx'
import WeightComparison from '../components/sections/WeightComparison.jsx'

export default function Home() {
  return (
    <>
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
