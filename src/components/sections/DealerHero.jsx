import Container from '../ui/Container.jsx'
import { dealerHero } from '../../data/dealerInquiry.js'

export default function DealerHero() {
  return (
    <section className="bg-brand-blue">
      <Container className="py-16 sm:py-20 text-center">
        <p className="text-brand-orange font-semibold text-sm sm:text-base uppercase tracking-wide mb-2">
          {dealerHero.eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          {dealerHero.title}
        </h1>
        <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto">
          {dealerHero.subtitle}
        </p>
      </Container>
    </section>
  )
}