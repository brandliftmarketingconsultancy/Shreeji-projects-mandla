import ManufacturingHero from '../components/sections/ManufacturingHero.jsx'
import PlantGallery from '../components/sections/PlantGallery.jsx'
import Machinery from '../components/sections/Machinery.jsx'
import ManufacturingProcess from '../components/sections/ManufacturingProcess.jsx'
import CapacityStats from '../components/sections/CapacityStats.jsx'
import QualityControl from '../components/sections/QualityControl.jsx'
import ManufacturingCta from '../components/sections/ManufacturingCta.jsx'
import { Helmet } from 'react-helmet-async'
import ManufacturingFAQ from '../components/sections/ManufacturingFAQ.jsx'

export default function Manufacturing() {
  return (
    <>
    <Helmet>
  <title>
    AAC Block Manufacturing Plant in Mandla | Shreeji Projects
  </title>
  <meta
    name="description"
    content="See how Shreeji Projects makes AAC blocks in Mandla, MP: automated batching, autoclaving and quality checks at every stage. Visit our plant."
  />
  <meta
    name="keywords"
    content="aac block plant, aac block manufacturing plant, aac block manufacturing company, aerated autoclaved concrete, aerated autoclaved block, aac bricks manufacturing plant, aac block manufacturing plant near me, cement bricks manufacturing, fly ash brick manufacturing company, brick manufacturing company mp"
  />
  <link
    rel="canonical"
    href="https://shreeji-projects-mandla.vercel.app/manufacturing-plants"
  />
</Helmet>
      <ManufacturingHero />
      <PlantGallery />
      <Machinery />
      <ManufacturingProcess />
      <CapacityStats />
      <QualityControl />
      <ManufacturingFAQ />
      <ManufacturingCta />
    </>
  )
}