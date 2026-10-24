
import { useState } from 'react'
import { FileImage } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { projectCategories, projects } from '../../data/projectsGallery.js'

const categoryLabel = Object.fromEntries(
  projectCategories.map((category) => [category.id, category.label])
)

export default function ProjectFilterGallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        {/* Photo gallery filters */}
        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
          aria-label="Filter gallery photos"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors sm:px-5 ${
                activeCategory === category.id
                  ? 'bg-brand-orange text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Approved gallery photos */}
        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((photo) => (
              <article
                key={photo.id}
                className="group overflow-hidden rounded-xl2 bg-white shadow-card transition-shadow duration-200 hover:shadow-card-hover"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.image}
                    alt={photo.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-brand-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {categoryLabel[photo.category] || 'Gallery'}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-brand-blue">
                    {photo.title}
                  </h3>

                  {photo.description && (
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {photo.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <FileImage
              size={36}
              aria-hidden="true"
              className="mx-auto mb-4 text-gray-300"
            />

            <p className="text-sm leading-6 text-gray-500">
              No photos available in this category yet. Contact us to see
              more of our work.
            </p>
          </div>
        )}
      </Container>
    </section>
  )
}
