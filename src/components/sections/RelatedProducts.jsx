import { Link } from 'react-router-dom'
import { ArrowRight, Boxes, Layers, PaintRoller, Box, LayoutGrid, Ruler } from 'lucide-react'
import { relatedCatalog, relatedByPage } from '../../data/relatedProducts.js'

const icons = { Boxes, Layers, PaintRoller, Box, LayoutGrid, Ruler }

export default function RelatedProducts({ pageKey }) {
  const config = relatedByPage[pageKey]
  if (!config) return null

  const cards = config.items
  .map((item) => {
    const key = typeof item === 'string' ? item : item.key
    const base = relatedCatalog[key]
    if (!base) return null
    return typeof item === 'string' ? base : { ...base, ...item }
  })
  .filter(Boolean)

  return (
    <section className="bg-slate-50 py-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">{config.title}</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-orange-500" />
        </div>

        <div className={`grid gap-6 sm:grid-cols-2 ${cards.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
          {cards.map((card) => {
            const Icon = icons[card.icon] || Box
            return (
              <Link
                key={card.href}
                to={card.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-400 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-slate-900">{card.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-slate-600">{card.description}</p>

                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-blue-900 group-hover:text-orange-600">
                  View product
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}