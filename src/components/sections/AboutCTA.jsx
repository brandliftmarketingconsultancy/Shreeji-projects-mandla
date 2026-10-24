
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { aboutCta } from '../../data/content.js'

export default function AboutCTA() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container>
        <div className="rounded-xl2 bg-brand-blue px-6 py-10 sm:px-12 sm:py-14 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            {aboutCta.title}
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            {aboutCta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
            <Button href={aboutCta.primaryHref} variant="primary">
              {aboutCta.primaryLabel}
            </Button>

            <a
              href={aboutCta.phoneHref}
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              {aboutCta.phoneLabel}
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white font-semibold text-sm mb-3">
              Explore Our Products
            </p>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-sm">
              {aboutCta.products.map((product, index) => (
                <span key={product.href}>
                  <a
                    href={product.href}
                    className="text-white/80 hover:text-brand-orange underline underline-offset-4 transition-colors"
                  >
                    {product.label}
                  </a>

                  {index < aboutCta.products.length - 1 && (
                    <span className="text-white/40 ml-3" aria-hidden="true">
                      |
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
