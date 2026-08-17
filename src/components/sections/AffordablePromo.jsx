import Container from '../ui/Container.jsx'
import PromoSplit from '../ui/PromoSplit.jsx'
import { affordablePromo, deliveryStates } from '../../data/content.js'

export default function AffordablePromo() {
  return (
    <section className="py-16 bg-brand-blue/[0.03]">
      <Container>
        <PromoSplit
          imageSide={affordablePromo.imageSide}
          image={affordablePromo.image}
          imageAlt={affordablePromo.imageAlt}
          badge={{ icon: affordablePromo.badgeIcon, label: affordablePromo.badgeLabel }}
          title={affordablePromo.title}
          description={`${affordablePromo.descriptionPrefix}${deliveryStates.join(', ')}`}
          points={affordablePromo.points}
          cta={affordablePromo.cta}
          ctaHref={affordablePromo.ctaHref}
          ctaVariant={affordablePromo.ctaVariant}
        />
      </Container>
    </section>
  )
}
