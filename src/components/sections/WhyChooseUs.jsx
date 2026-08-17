import Container from '../ui/Container.jsx'
import PromoSplit from '../ui/PromoSplit.jsx'
import { whyChooseUs } from '../../data/content.js'

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <PromoSplit
          imageSide={whyChooseUs.imageSide}
          image={whyChooseUs.image}
          imageAlt={whyChooseUs.imageAlt}
          badge={{ icon: whyChooseUs.badgeIcon, label: whyChooseUs.badgeLabel }}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
          points={whyChooseUs.points}
          cta={whyChooseUs.cta}
          ctaHref={whyChooseUs.ctaHref}
          ctaVariant={whyChooseUs.ctaVariant}
        />
      </Container>
    </section>
  )
}
