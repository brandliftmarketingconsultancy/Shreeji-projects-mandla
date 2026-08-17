import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { aacCta } from '../../data/aacblock.js'

export default function AacCta() {
  return (
    <section className="bg-brand-blue py-14 sm:py-16">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {aacCta.title}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">{aacCta.subtitle}</p>
        </div>
        <Button href={aacCta.ctaHref} variant="primary" className="shrink-0">
          {aacCta.cta}
        </Button>
      </Container>
    </section>
  )
}