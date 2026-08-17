import { Factory, Leaf, Zap, ShieldCheck, Check } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { whyPartner } from '../../data/content.js'

const iconMap = {
  factory: Factory,
  leaf: Leaf,
  zap: Zap,
  'shield-check': ShieldCheck,
}

export default function WhyPartner() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <div className="max-w-3xl mb-10">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wide mb-2">
            {whyPartner.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue">
            {whyPartner.title}
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {whyPartner.points.map((point, i) => {
            const Icon = iconMap[point.icon]
            return (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl2 shadow-card p-5 sm:p-6"
              >
                <div className="w-9 h-9 rounded-md bg-brand-orange flex items-center justify-center shrink-0">
                  {Icon ? (
                    <Icon size={18} className="text-white" />
                  ) : (
                    <Check size={18} className="text-white" />
                  )}
                </div>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {point.text}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}