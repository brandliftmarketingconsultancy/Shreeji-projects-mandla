import GalleryHero from '../components/sections/GalleryHero.jsx'
import ProjectFilterGallery from '../components/sections/ProjectFilterGallery.jsx'
import GalleryStats from '../components/sections/GalleryStats.jsx'
import GalleryCta from '../components/sections/GalleryCta.jsx'
import { Helmet } from 'react-helmet-async'

export default function ProjectsGallery() {
  return (
    <>
    
<Helmet>
  <title>Photo Gallery | Shreeji Projects, Mandla MP</title>
  <meta
    name="description"
    content="Photos of Shreeji AAC blocks, fly ash bricks, paver blocks and our plant in Mandla."
  />
  <meta name="robots" content="noindex, follow" />
  <link
    rel="canonical"
    href="https://shreeji-projects-mandla.vercel.app/projects"
  />
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://shreeji-projects-mandla.vercel.app/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Photo Gallery',
          item: 'https://shreeji-projects-mandla.vercel.app/projects',
        },
      ],
    })}
  </script>
</Helmet>

      <GalleryHero />
      <ProjectFilterGallery />
      <GalleryStats />
      <GalleryCta />
    </>
  )
}