import { useState } from 'react'
import { MapPin } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { projectCategories, projects } from '../../data/projectsGallery.js'

const categoryLabel = Object.fromEntries(
  projectCategories.map((c) => [c.id, c.label])
)

export default function ProjectFilterGallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        {/* Filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.id
                  ? 'bg-brand-orange text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl2 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wide px-3 py-1">
                  {categoryLabel[project.category]}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-brand-blue text-base mb-1.5">
                  {project.title}
                </h3>
                <p className="inline-flex items-center gap-1.5 text-gray-500 text-sm">
                  <MapPin size={14} className="text-brand-orange shrink-0" />
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-12">
            No projects found in this category yet.
          </p>
        )}
      </Container>
    </section>
  )
}