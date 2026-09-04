import { ShieldCheck, BadgeCheck, Droplet } from 'lucide-react'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { contact } from '../../data/navigation.js'
import { hero } from '../../data/content.js'

const badgeIconMap = {
  'badge-check': BadgeCheck,
  'shield-check': ShieldCheck,
  droplet: Droplet,
}

export default function Hero() {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      <img
  src={hero.image}
  alt={hero.imageAlt}
  className="absolute inset-0 w-full h-full object-cover object-[80%_center] lg:object-center"
/>
      <div className="absolute inset-0 bg-gradient-to-r  via-brand-blue/70 to-brand-blue/20" />

      <Container className="relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-xl flex flex-col gap-5">
          <h1 className="text-white font-black text-4xl sm:text-5xl leading-[1.1]">
            {hero.titleLine1} <span className="text-brand-orange">{hero.titleHighlight}</span>
          </h1>
          <p className="text-white/90 text-lg">{hero.subtitle}</p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button href={hero.primaryCtaHref} variant="primary">
              {hero.primaryCta}
            </Button>
            <Button href={`tel:${contact.phone.replace(/\s/g, '')}`} variant="ghost" icon="phone">
              {hero.secondaryCtaPrefix}
              {contact.phoneDisplay}
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-4">
            {hero.badges.map(({ icon, label }) => {
              const Icon = badgeIconMap[icon] ?? BadgeCheck
              return (
                <div
                  key={label}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md"
                  title={label}
                >
                  <Icon size={20} className="text-brand-blue" />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
