import { Award, Trophy, Medal, Star } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { awards } from '../../data/content.js'

const iconMap = {
  award: Award,
  trophy: Trophy,
  medal: Medal,
  star: Star,
}

export default function Awards() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wide mb-2">
            {awards.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue mb-3">
            {awards.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">{awards.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Award
            return (
              <div
                key={i}
                className="rounded-xl2 border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-200 p-6 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center mb-4">
                  <Icon size={26} className="text-brand-orange" />
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