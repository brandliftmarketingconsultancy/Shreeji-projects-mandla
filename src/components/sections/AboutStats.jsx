import { Home as HomeIcon, MapPin, Calendar, Feather } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { aboutStats } from '../../data/content.js'

const iconMap = {
  home: HomeIcon,
  'map-pin': MapPin,
  calendar: Calendar,
  feather: Feather,
}

export default function AboutStats() {
  return (
    <section className="bg-brand-blue py-14 sm:py-16">
      <Container className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6">
        {aboutStats.map((stat) => {
          const Icon = iconMap[stat.icon]
          return (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              {Icon && (
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-1">
                  <Icon size={22} className="text-brand-orange" />
                </div>
              )}
              <p className="text-white text-3xl sm:text-4xl font-extrabold">{stat.value}</p>
              <p className="text-white/70 text-xs sm:text-sm font-medium">{stat.label}</p>
            </div>
          )
        })}
      </Container>
    </section>
  )
}