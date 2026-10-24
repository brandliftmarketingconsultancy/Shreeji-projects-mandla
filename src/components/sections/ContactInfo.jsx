
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { contact, socialLinks } from '../../data/navigation.js'
import {
  getInTouch,
  callCard,
  corporateOffice,
  contactMap,
} from '../../data/content.js'

const productLinks = [
  { label: 'AAC Blocks', href: '/products/aac-blocks' },
  { label: 'Fly Ash Bricks', href: '/products/fly-ash-bricks' },
  { label: 'Paver Blocks', href: '/products/paver-blocks' },
  { label: 'Fencing Pole', href: '/products/fencing-poles' },
  { label: 'Cover Blocks', href: '/products/cover-blocks' },
]

export default function ContactInfo() {
  const phoneNumber = '+91 7067062323'
  const emailAddress = 'shreejiprojectsmandla@gmail.com'

  return (
    <section className="py-16 sm:py-20">
      <Container>
        {/* Get in Touch */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-brand-blue font-extrabold text-2xl sm:text-3xl">
            {getInTouch.title}
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            {getInTouch.description}
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            {socialLinks
              .filter((s) =>
                ['facebook', 'instagram'].includes(s.icon?.toLowerCase())
              )
              .map((s) => {
                const Icon =
                  s.icon?.toLowerCase() === 'facebook'
                    ? Facebook
                    : Instagram

                const label =
                  s.icon?.toLowerCase() === 'facebook'
                    ? 'Shreeji Projects on Facebook'
                    : 'Shreeji Projects on Instagram'

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
          </div>
        </div>

        {/* Contact details and map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-xl2 border border-gray-100 shadow-card overflow-hidden flex flex-col">
            {/* Call card */}
            <div className="px-6 sm:px-8 py-10 text-center border-b border-gray-100">
              <p className="text-brand-blue font-bold text-lg">
                {callCard.label}
              </p>

              <a
                href="tel:+917067062323"
                className="block text-brand-dark font-black text-2xl sm:text-4xl mt-2 hover:text-brand-orange transition-colors"
              >
                {phoneNumber}
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center gap-2 text-gray-500 text-sm mt-3 hover:text-brand-orange"
              >
                <Mail size={16} />
                {emailAddress}
              </a>

              <div className="mt-6">
                <Button
                  href={callCard.mapHref}
                  variant="secondary"
                  icon={null}
                >
                  See on Map
                </Button>
              </div>
            </div>

            {/* Corporate office */}
            <div className="flex flex-col sm:flex-row gap-5 p-6 sm:p-8">
              <img
                src={corporateOffice.image}
                alt={corporateOffice.imageAlt}
                className="w-full sm:w-40 h-32 object-cover rounded-lg shrink-0"
                loading="lazy"
              />

              <div>
                <p className="flex items-center gap-2 text-brand-blue font-bold text-sm mb-2">
                  <MapPin size={16} />
                  {corporateOffice.heading}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Beside Axis Bank, Jabalpur Road, Mandla (M.P.) - 481661
                </p>
              </div>
            </div>

            {/* Factory address */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <p className="flex items-center gap-2 text-brand-blue font-bold text-sm mb-2">
                <MapPin size={16} />
                Factory:
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                Gram Mugadara, Bamhni Banjar, Dist. Mandla (M.P.) - 481661
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mt-3">
                Our office is on Jabalpur Road in Mandla, beside Axis Bank.
                Our factory is at Gram Mugadara, Bamhni Banjar, in Mandla
                district. Call us before you visit and we will guide you.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl2 overflow-hidden shadow-card border border-gray-100 min-h-[320px] lg:min-h-full">
            <iframe
              title={contactMap.title}
              src={contactMap.embedSrc}
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Areas We Serve */}
        <div className="max-w-3xl mx-auto text-center mt-16 sm:mt-20">
          <h2 className="text-brand-blue font-extrabold text-2xl sm:text-3xl">
            Areas We Serve
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            We supply builders, contractors and dealers across Mandla
            district. We also deliver to Jabalpur, Seoni, Balaghat,
            Chhindwara and Narsinghpur, and to other parts of Madhya
            Pradesh and Chhattisgarh.
          </p>

          <div className="mt-5 text-sm sm:text-base leading-loose">
            <span className="font-semibold text-brand-dark">
              See our products:{' '}
            </span>

            {productLinks.map((product, index) => (
              <span key={product.href}>
                <a
                  href={product.href}
                  className="text-brand-blue hover:text-brand-orange underline underline-offset-4 transition-colors"
                >
                  {product.label}
                </a>
                {index < productLinks.length - 1 && (
                  <span className="text-gray-400"> | </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
