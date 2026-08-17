import Container from '../ui/Container.jsx'
import { coverSizes } from '../../data/coverblocks.js'

export default function CoverSizes() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue mb-3">
            {coverSizes.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">{coverSizes.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {coverSizes.items.map((item) => (
            <div
              key={item.thickness}
              className="rounded-xl2 border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-200 bg-white p-6 flex flex-col items-center text-center"
            >
              <p className="text-brand-orange text-3xl sm:text-4xl font-extrabold mb-2">
                {item.thickness}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.use}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}