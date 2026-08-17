import FencingHero from '../components/sections/FencingHero.jsx'
import FencingSizes from '../components/sections/FencingSizes.jsx'
import FencingApplications from '../components/sections/FencingApplications.jsx'
import FencingUseCases from '../components/sections/FencingUseCases.jsx'
import FencingFaq from '../components/sections/FencingFaq.jsx'
import FencingCta from '../components/sections/FencingCta.jsx'

export default function FencingPole() {
  return (
    <>
      <FencingHero />
      <FencingSizes />
      <FencingApplications />
      <FencingUseCases />
      <FencingFaq />
      <FencingCta />
    </>
  )
}