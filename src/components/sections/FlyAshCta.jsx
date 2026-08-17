import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { flyAshCta } from '../../data/flyashbricks.js'

export default function FlyAshCta() {
  return (
    <section className="bg-brand-blue py-14 sm:py-16">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {flyAshCta.title}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">{flyAshCta.subtitle}</p>
        </div>
        <Button href={flyAshCta.ctaHref} variant="primary" className="shrink-0">
          {flyAshCta.cta}
        </Button>
      </Container>
    </section>
  )
}