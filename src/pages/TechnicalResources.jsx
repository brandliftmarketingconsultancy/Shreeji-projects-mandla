import ResourcesHero from '../components/sections/ResourcesHero.jsx'
import ResourceLibrary from '../components/sections/ResourceLibrary.jsx'
import ResourcesCta from '../components/sections/ResourcesCta.jsx'
import { Helmet } from 'react-helmet-async'

export default function TechnicalResources() {
  return (
    <>
      <Helmet><title>
        Brochures, Size Charts and Spec Sheets | Shreeji Projects
      </title>
        <meta
          name="description"
          content="Download Shreeji brochures, AAC block size charts, technical specification sheets and installation guides for AAC blocks, fly ash bricks and pavers."
        />
        <meta
          name="keywords"
          content="aac block size chart, aac blocks brochure, aac block specifications, aac block installation guide, paver block laying guide, fly ash bricks specifications, cover block size chart, fencing pole size chart, shreeji product catalogue"
        />
        <link
          rel="canonical"
          href="https://shreeji-projects-mandla.vercel.app/resources"
        />
        </Helmet>
      <ResourcesHero />
      <ResourceLibrary />
      <ResourcesCta />
    </>
  )
}