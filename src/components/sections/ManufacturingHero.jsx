import Container from '../ui/Container.jsx'
import { manufacturingHero } from '../../data/manufacturing.js'

export default function ManufacturingHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={manufacturingHero.image}
          alt={manufacturingHero.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/85 to-brand-blue-dark/60" />
      </div>

      <Container className="relative py-20 sm:py-28">
        <p className="text-brand-orange font-semibold text-sm sm:text-base uppercase tracking-wide mb-2">
          {manufacturingHero.eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-2xl leading-tight">
          {manufacturingHero.title}
        </h1>
        <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl">
          {manufacturingHero.subtitle}
        </p>
      </Container>
    </section>
  )
}