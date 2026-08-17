import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { contact, socialLinks } from '../../data/navigation.js'
import { getInTouch, callCard, corporateOffice, contactMap } from '../../data/content.js'

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
}

export default function ContactInfo() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-brand-blue font-extrabold text-2xl sm:text-3xl">
            {getInTouch.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
            {getInTouch.description}
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: call card + corporate office */}
          <div className="rounded-xl2 border border-gray-100 shadow-card overflow-hidden flex flex-col">
            <div className="px-8 py-10 text-center border-b border-gray-100">
              <p className="text-brand-blue font-bold text-lg">{callCard.label}</p>
              <a
                href={`tel:${contact.phone.replace(/\s/g, '')}`}
                className="block text-brand-dark font-black text-3xl sm:text-4xl mt-2 hover:text-brand-orange transition-colors"
              >
                {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-gray-500 text-sm mt-3 hover:text-brand-orange"
              >
                <Mail size={16} />
                Mail us at {contact.email}
              </a>
              <div className="mt-6">
                <Button href={callCard.mapHref} variant="secondary" icon={null}>
                  {callCard.mapCta}
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 p-6 sm:p-8">
              <img
                src={corporateOffice.image}
                alt={corporateOffice.imageAlt}
                className="w-full sm:w-40 h-32 object-cover rounded-lg shrink-0"
              />
              <div>
                <p className="flex items-center gap-2 text-brand-blue font-bold text-sm mb-2">
                  <MapPin size={16} />
                  {corporateOffice.heading}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{contact.address}</p>
              </div>
            </div>
          </div>

          {/* Right: map */}
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
      </Container>
    </section>
  )
}