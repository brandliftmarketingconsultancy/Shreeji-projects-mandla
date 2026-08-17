import Container from '../ui/Container.jsx'
import { paverGallery, paverColors } from '../../data/paverblocks.js'

// Look up a color's hex from its name so design cards only need to store names.
const colorMap = Object.fromEntries(paverColors.map((c) => [c.name, c.hex]))

export default function PaverGallery() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue mb-3">
            {paverGallery.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">{paverGallery.subtitle}</p>
        </div>

        {/* Full color legend */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {paverColors.map((color) => (
            <span key={color.name} className="inline-flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                style={{ backgroundColor: color.hex }}
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-medium text-gray-600">{color.name}</span>
            </span>
          ))}
        </div>

        {/* Design gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paverGallery.designs.map((design) => (
            <div
              key={design.name}
              className="rounded-xl2 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200 bg-white"
            >
              <img
                src={design.image}
                alt={design.imageAlt}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-brand-blue text-sm sm:text-base mb-3">
                  {design.name}
                </h3>
                <div className="flex items-center gap-1.5">
                  {design.colorNames.map((name) => (
                    <span
                      key={name}
                      title={name}
                      className="w-5 h-5 rounded-full border border-black/10 shrink-0"
                      style={{ backgroundColor: colorMap[name] }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}