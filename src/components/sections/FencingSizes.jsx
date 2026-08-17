import Container from '../ui/Container.jsx'
import { fencingSizes } from '../../data/fencingpole.js'

export default function FencingSizes() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue mb-3">
            {fencingSizes.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">{fencingSizes.subtitle}</p>
        </div>

        {/* Proportional height chart — each pole's bar height reflects its
            relative length, so the size range reads visually at a glance. */}
        <div className="flex items-end justify-center gap-5 sm:gap-8 lg:gap-10 overflow-x-auto pb-2">
          {fencingSizes.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center shrink-0">
              <span className="text-brand-blue font-extrabold text-lg sm:text-xl mb-2">
                {item.label}
              </span>
              <div className="relative flex flex-col items-center justify-end">
                {/* pole cap */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-orange mb-[-2px] z-10" />
                {/* pole shaft */}
                <div
                  className="w-3 sm:w-4 rounded-t-sm bg-gradient-to-b from-brand-blue-light to-brand-blue"
                  style={{ height: `${item.barHeight}px` }}
                />
              </div>
              <span className="mt-3 text-xs sm:text-sm text-gray-500 font-medium text-center whitespace-nowrap">
                {item.diameter}
              </span>
            </div>
          ))}
        </div>
        {/* ground line */}
        <div className="max-w-3xl mx-auto h-1 rounded-full bg-gray-100 mt-1" />
      </Container>
    </section>
  )
}