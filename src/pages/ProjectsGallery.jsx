import GalleryHero from '../components/sections/GalleryHero.jsx'
import ProjectFilterGallery from '../components/sections/ProjectFilterGallery.jsx'
import GalleryStats from '../components/sections/GalleryStats.jsx'
import GalleryCta from '../components/sections/GalleryCta.jsx'

export default function ProjectsGallery() {
  return (
    <>
      <GalleryHero />
      <ProjectFilterGallery />
      <GalleryStats />
      <GalleryCta />
    </>
  )
}