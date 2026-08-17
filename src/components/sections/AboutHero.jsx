import { ChevronRight } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { aboutHero } from '../../data/content.js'

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aboutHero.image}
          alt={aboutHero.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r  via-brand-blue-dark/85 to-brand-blue-dark/60" />
      </div>

      <Container className="relative py-20 sm:py-28">
        <nav className="flex items-center gap-1.5 text-sm text-white/70 mb-4">
          <a href="/" className="hover:text-brand-orange transition-colors">
            Home
          </a>
          <ChevronRight size={14} />
          <span className="text-white font-medium">About Us</span>
        </nav>

        <p className="text-brand-orange font-semibold text-sm sm:text-base uppercase tracking-wide mb-2">
          {aboutHero.eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white max-w-2xl leading-tight">
          {aboutHero.title}
        </h1>
        <p className="mt-4 text-white/85 text-base sm:text-lg max-w-xl">
          {aboutHero.subtitle}
        </p>
      </Container>
    </section>
  )
}