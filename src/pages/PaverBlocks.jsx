import PaverHero from '../components/sections/PaverHero.jsx'
import PaverApplications from '../components/sections/PaverApplications.jsx'
import PaverGallery from '../components/sections/PaverGallery.jsx'
import PaverFaq from '../components/sections/PaverFaq.jsx'
import PaverCta from '../components/sections/PaverCta.jsx'

export default function PaverBlocks() {
  return (
    <>
      <PaverHero />
      <PaverApplications />
      <PaverGallery />
      <PaverFaq />
      <PaverCta />
    </>
  )
}