import ManufacturingHero from '../components/sections/ManufacturingHero.jsx'
import PlantGallery from '../components/sections/PlantGallery.jsx'
import Machinery from '../components/sections/Machinery.jsx'
import ManufacturingProcess from '../components/sections/ManufacturingProcess.jsx'
import CapacityStats from '../components/sections/CapacityStats.jsx'
import QualityControl from '../components/sections/QualityControl.jsx'
import ManufacturingCta from '../components/sections/ManufacturingCta.jsx'

export default function Manufacturing() {
  return (
    <>
      <ManufacturingHero />
      <PlantGallery />
      <Machinery />
      <ManufacturingProcess />
      <CapacityStats />
      <QualityControl />
      <ManufacturingCta />
    </>
  )
}