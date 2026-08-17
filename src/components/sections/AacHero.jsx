import { FileText, Calculator } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { aacHero } from '../../data/aacblock.js'

export default function AacHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={aacHero.image}
          alt={aacHero.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="relative min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] flex items-center py-12">
        <div className="max-w-2xl rounded-xl2 bg-black/50 p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            {aacHero.title}
          </h1>
          <p className="text-white/90 text-base sm:text-lg font-semibold mb-8">
            {aacHero.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={aacHero.primaryCtaHref}
              className="inline-flex items-center gap-2 rounded-md bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm sm:text-base font-semibold transition-colors"
            >
              <FileText size={18} />
              {aacHero.primaryCta}
            </a>

            <a
              href={aacHero.secondaryCtaHref}
              className="inline-flex items-center gap-2 text-white font-semibold text-sm sm:text-base hover:text-brand-orange transition-colors"
            >
              {/* <Calculator size={18} /> */}
              {aacHero.secondaryCta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}