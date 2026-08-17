import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { contact, socialLinks } from '../../data/navigation.js'
import { footerQuickLinks, footerReadMore, footerBanner } from '../../data/content.js'
import { site } from '../../data/site.js'

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
}

function FooterLinkList({ title, links }) {
  return (
    <div>
      <h4 className="text-white font-bold text-lg mb-3">{title}</h4>
      <div className="w-10 h-1 bg-brand-orange rounded-full mb-5" />
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-gray-300 hover:text-brand-orange text-sm transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark">
      {/* Delivery banner */}
      <div className="bg-brand-orange py-3">
        <Container>
          <p className="text-center text-white font-bold text-sm sm:text-base">
            {footerBanner}
          </p>
        </Container>
      </div>

      <Container className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand col */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-11 h-11 rounded-lg bg-brand-orange flex items-center justify-center">
              <span className="text-white font-black text-lg">{site.logoInitial}</span>
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-white text-lg">
                {site.brandName} <span className="text-brand-orange">{site.brandNameAccent}</span>
              </p>
              <p className="text-[10px] uppercase tracking-wide text-gray-400">
                {site.brandTagline}
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-5">{site.footerTagline}</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <FooterLinkList title="Quick Link" links={footerQuickLinks} />
        <FooterLinkList title="Read More" links={footerReadMore} />

        {/* Contact col */}
        <div>
          <h4 className="text-white font-bold text-lg mb-3">{site.footerContactLabels.heading}</h4>
          <div className="w-10 h-1 bg-brand-orange rounded-full mb-5" />
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-brand-orange mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">{site.footerContactLabels.phone}</p>
                <a href={`tel:${contact.phone}`} className="text-gray-300 text-sm hover:text-brand-orange">
                  {contact.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-brand-orange mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">{site.footerContactLabels.email}</p>
                <a href={`mailto:${contact.email}`} className="text-gray-300 text-sm hover:text-brand-orange break-all">
                  {contact.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-orange mt-0.5 shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">{site.footerContactLabels.address}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{contact.address}</p>
              </div>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-5">
        <p className="text-center text-gray-400 text-sm">
          Copyright <span className="text-white font-semibold">{site.copyrightHolder}</span> ©{' '}
          {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
