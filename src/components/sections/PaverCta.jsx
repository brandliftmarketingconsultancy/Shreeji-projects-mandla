import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { paverCta } from '../../data/paverblocks.js'

export default function PaverCta() {
  return (
    <section className="bg-brand-blue py-14 sm:py-16">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {paverCta.title}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">{paverCta.subtitle}</p>
        </div>
        <Button href={paverCta.ctaHref} variant="primary" className="shrink-0">
          {paverCta.cta}
        </Button>
      </Container>
    </section>
  )
}