import Container from '../ui/Container.jsx'
import { contactHero } from '../../data/content.js'

const dots = [
  { top: '12%', left: '4%', size: 22 },
  { top: '30%', left: '14%', size: 12 },
  { top: '48%', left: '3%', size: 30 },
  { top: '68%', left: '11%', size: 16 },
  { top: '20%', left: '22%', size: 10 },
]

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark min-h-[420px] sm:min-h-[460px] lg:min-h-[480px]">
      
      {/* Background image */}
      <img
        src={contactHero.image}
        alt={contactHero.imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r  via-brand-dark/60 to-brand-blue/20" />

      {/* Bokeh dots */}
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/20 blur-[1px]"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}

      {/* Content */}
      <Container className="relative flex min-h-[420px] items-center sm:min-h-[460px] lg:min-h-[480px]">
        <div className="w-full max-w-xl rounded-xl bg-black/30 px-6 py-6 backdrop-blur-sm sm:px-8 sm:py-8">
          <h1 className="text-4xl font-black text-white sm:text-5xl">
            {contactHero.title}
          </h1>

          <p className="mt-3 text-base font-medium text-white/90 sm:text-lg">
            {contactHero.subtitle}
          </p>
        </div>
      </Container>
    </section>
  )
}