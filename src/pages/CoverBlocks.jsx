import CoverHero from '../components/sections/CoverHero.jsx'
import CoverTypes from '../components/sections/CoverTypes.jsx'
import CoverSizes from '../components/sections/CoverSizes.jsx'
import CoverTechSpecs from '../components/sections/CoverTechSpecs.jsx'
import CoverFaq from '../components/sections/CoverFaq.jsx'
import CoverCta from '../components/sections/CoverCta.jsx'

export default function CoverBlocks() {
  return (
    <>
      <CoverHero />
      <CoverTypes />
      <CoverSizes />
      <CoverTechSpecs />
      <CoverFaq />
      <CoverCta />
    </>
  )
}