import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { whoWeAre } from '../../data/content.js'

export default function WhoWeAre() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wide mb-2">
            {whoWeAre.eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue mb-6">
            {whoWeAre.title}
          </h2>

          <div className="flex flex-col gap-4">
            {whoWeAre.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          <Button href={whoWeAre.ctaHref} variant="primary" className="mt-8">
            {whoWeAre.cta}
          </Button>
        </div>

        <div className="relative">
          <div className="rounded-xl2 overflow-hidden shadow-card">
            <img
              src={whoWeAre.image}
              alt={whoWeAre.imageAlt}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white rounded-xl2 shadow-card-hover px-5 py-4">
            <div className="w-11 h-11 rounded-lg bg-brand-orange/10 flex items-center justify-center">
              <span className="text-brand-orange font-black text-lg">C</span>
            </div>
            <div className="leading-tight">
              <p className="text-brand-blue font-extrabold text-sm">CONECC</p>
              <p className="text-gray-500 text-xs">Concrete Solutions</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}