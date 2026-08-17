import { useState, useMemo } from 'react'
import { Search, BookOpen, Ruler, ClipboardList, Wrench, Download, FileText } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { resourceCategories, resources } from '../../data/technicalResources.js'

const categoryIconMap = {
  brochures: BookOpen,
  'size-charts': Ruler,
  specs: ClipboardList,
  'installation-guides': Wrench,
}

export default function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')

  const filteredResources = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = activeCategory === 'all' || r.category === activeCategory
      const matchesQuery =
        query.trim() === '' ||
        r.title.toLowerCase().includes(query.trim().toLowerCase()) ||
        r.description.toLowerCase().includes(query.trim().toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        {/* Search */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources..."
            className="w-full rounded-full border border-gray-200 bg-gray-50 pl-11 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
          />
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {resourceCategories.map((cat) => (
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

        {/* Resource cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((resource) => {
            const Icon = categoryIconMap[resource.category] || FileText
            return (
              <div
                key={resource.id}
                className="flex flex-col justify-between rounded-xl2 border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-200 bg-white p-6"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-orange" />
                  </div>
                  <h3 className="font-bold text-brand-blue text-base mb-2">{resource.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    <FileText size={13} />
                    {resource.fileType} &middot; {resource.fileSize}
                  </span>
                  <a
                    href={resource.href}
                    download
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors"
                  >
                    <Download size={15} />
                    Download
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {filteredResources.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-12">
            No resources match your search.
          </p>
        )}
      </Container>
    </section>
  )
}