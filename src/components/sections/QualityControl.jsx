import { FlaskConical, SearchCheck, Gauge, ClipboardCheck } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { qualityControl } from '../../data/manufacturing.js'

const iconMap = {
  'flask-conical': FlaskConical,
  'search-check': SearchCheck,
  gauge: Gauge,
  'clipboard-check': ClipboardCheck,
}

export default function QualityControl() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue text-center mb-12">
          {qualityControl.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityControl.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.title}
                className="rounded-xl2 border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-200 bg-white p-6 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                  {Icon && <Icon size={26} className="text-brand-orange" />}
                </div>
                <h3 className="font-bold text-brand-blue text-sm sm:text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}