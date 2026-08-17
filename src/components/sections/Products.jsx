import Container from '../ui/Container.jsx'
import ProductCard from '../ui/ProductCard.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { products, productsSection } from '../../data/content.js'

export default function Products() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Container className="flex flex-col items-center gap-12">
        <SectionHeading
          title={productsSection.title}
          highlight={productsSection.titleHighlight}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 w-full">
          {products.map((p) => (
            <ProductCard key={p.title} {...p} />
          ))}
        </div>
      </Container>
    </section>
  )
}
