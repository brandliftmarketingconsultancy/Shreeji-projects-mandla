import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { resourcesCta } from '../../data/technicalResources.js'

export default function ResourcesCta() {
  return (
    <section className="bg-brand-blue py-14 sm:py-16">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {resourcesCta.title}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">{resourcesCta.subtitle}</p>
        </div>
        <Button href={resourcesCta.ctaHref} variant="primary" className="shrink-0">
          {resourcesCta.cta}
        </Button>
      </Container>
    </section>
  )
}