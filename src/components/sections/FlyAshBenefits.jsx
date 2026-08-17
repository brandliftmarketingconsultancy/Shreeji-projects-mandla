import { Gauge, Droplets, Layers, Sparkles, Leaf, Wallet } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { flyAshBenefits } from '../../data/flyashbricks.js'

const iconMap = {
  gauge: Gauge,
  droplets: Droplets,
  layers: Layers,
  sparkles: Sparkles,
  leaf: Leaf,
  wallet: Wallet,
}

export default function FlyAshBenefits() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue text-center mb-12">
          {flyAshBenefits.title}
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {flyAshBenefits.items.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white rounded-xl2 shadow-card p-5 sm:p-6"
              >
                <div className="w-14 h-14 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  {Icon && <Icon size={26} className="text-brand-orange" />}
                </div>
                <div>
                  <h3 className="font-bold text-brand-blue text-base sm:text-lg mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}