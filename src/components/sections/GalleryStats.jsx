import Container from '../ui/Container.jsx'
import { galleryStats } from '../../data/projectsGallery.js'

export default function GalleryStats() {
  return (
    <section className="bg-brand-blue py-14 sm:py-16">
      <Container className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6">
        {galleryStats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center gap-2">
            <p className="text-white text-3xl sm:text-4xl font-extrabold">{stat.value}</p>
            <p className="text-white/70 text-xs sm:text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}