import Container from '../ui/Container.jsx'
import { plantGallery } from '../../data/manufacturing.js'

export default function PlantGallery() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue mb-3">
            {plantGallery.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">{plantGallery.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plantGallery.images.map((item) => (
            <div
              key={item.caption}
              className="rounded-xl2 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200 bg-white"
            >
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <p className="font-semibold text-brand-blue text-sm">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}