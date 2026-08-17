import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { coverCta } from '../../data/coverblocks.js'

export default function CoverCta() {
  return (
    <section className="bg-brand-blue py-14 sm:py-16">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {coverCta.title}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">{coverCta.subtitle}</p>
        </div>
        <Button href={coverCta.ctaHref} variant="primary" className="shrink-0">
          {coverCta.cta}
        </Button>
      </Container>
    </section>
  )
}