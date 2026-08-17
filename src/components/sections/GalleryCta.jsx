import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { galleryCta } from '../../data/projectsGallery.js'

export default function GalleryCta() {
  return (
    <section className="bg-brand-dark py-14 sm:py-16">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            {galleryCta.title}
          </h2>
          <p className="text-white/70 text-sm sm:text-base">{galleryCta.subtitle}</p>
        </div>
        <Button href={galleryCta.ctaHref} variant="primary" className="shrink-0">
          {galleryCta.cta}
        </Button>
      </Container>
    </section>
  )
}