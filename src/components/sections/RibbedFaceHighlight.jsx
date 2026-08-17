import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import { ribbedFace } from '../../data/content.js'

export default function RibbedFaceHighlight() {
  return (
    <section className="py-20 bg-white">
      <Container className="flex flex-col items-center text-center gap-8">
        <SectionHeading title={ribbedFace.title} subtitle={ribbedFace.subtitle} />
        <img
          src={ribbedFace.image}
          alt={ribbedFace.imageAlt}
          className="w-full max-w-2xl object-contain"
        />
        <Button href={ribbedFace.ctaHref} variant="primary">
          {ribbedFace.cta}
        </Button>
      </Container>
    </section>
  )
}
