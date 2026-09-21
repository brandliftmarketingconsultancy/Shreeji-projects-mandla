import { ShieldCheck, BadgeCheck, Droplet } from 'lucide-react'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { contact } from '../../data/navigation.js'
import { hero } from '../../data/content.js'

const badgeIconMap = {
  droplet: '/images/isi-mark-certificate.webp',
  'badge-check': '/images/ISI.png',
  'shield-check': '/images/ISO.jpeg',
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

          <div className="mt-4 border-l-4 border-brand-orange pl-4">
            <p className="text-brand-orange font-extrabold uppercase tracking-wide text-lg sm:text-xl">
              {hero.approvedFor.label}
            </p>
            <ul className="mt-2 flex flex-wrap gap-2">
              {hero.approvedFor.items.map(({ name }) => (
                <li
                  key={name}
                  className="rounded bg-white/15 backdrop-blur-sm border border-white/30 px-3 py-1.5 text-sm sm:text-base font-semibold text-white"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 mt-4">
            {hero.badges.map(({ icon, label }) => {
              const iconSrc = badgeIconMap[icon]

              return (
                <div
                  key={label}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md overflow-hidden"
                  title={label}
                >
                  <img
                    src={iconSrc}
                    alt={label}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
