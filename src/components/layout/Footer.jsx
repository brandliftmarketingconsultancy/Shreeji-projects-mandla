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

      <Container className="py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand col */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={site.footerlogoImage}
              alt={`${site.brandName}${site.brandNameAccent} logo`}
              className="h-16 w-auto"
            />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-5">
            {site.footerTagline}
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = iconMap[s.icon]

              if (!Icon) return null

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

        {/* Quick Links */}
        <FooterLinkList
          title="Quick Link"
          links={footerQuickLinks}
        />

        {/* Read More */}
        <FooterLinkList
          title="Read More"
          links={footerReadMore}
        />

         <div>
          <h4 className="text-white font-bold text-lg mb-3">
            Certifications
          </h4>

          <div className="w-10 h-1 bg-brand-orange rounded-full mb-5" />

          <ul className="flex flex-col gap-3">

            <li>
              <p className="text-white font-semibold text-sm">
                MSME Certificate
              </p>
              <p className="text-gray-300 text-sm break-words">
                {site.certifications.msme}
              </p>
            </li>


             <li>
              <p className="text-white font-semibold text-sm">
                GST No.
              </p>
              <p className="text-gray-300 text-sm break-words">
                {site.certifications.gst}
              </p>
            </li>

            <li>
              <p className="text-white font-semibold text-sm">
                ISO Certification
              </p>
              <p className="text-gray-300 text-sm break-words">
                {site.certifications.iso}
              </p>
            </li>

            <li>
              <p className="text-white font-semibold text-sm">
                ISI Certificate
              </p>
              <p className="text-gray-300 text-sm break-words">
                {site.certifications.isi}
              </p>
            </li>

           

            

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-lg mb-3">
            {site.footerContactLabels.heading}
          </h4>

          <div className="w-10 h-1 bg-brand-orange rounded-full mb-5" />

          <ul className="flex flex-col gap-4">

            {/* Phone */}
            <li className="flex items-start gap-3">
              <Phone
                size={18}
                className="text-brand-orange mt-0.5 shrink-0"
              />

              <div>
                <p className="text-white font-semibold text-sm">
                  {site.footerContactLabels.phone}
                </p>

                <a
                  href={`tel:${contact.phone}`}
                  className="text-gray-300 text-sm hover:text-brand-orange transition-colors"
                >
                  {contact.phone}
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <Mail
                size={18}
                className="text-brand-orange mt-0.5 shrink-0"
              />

              <div className="min-w-0">
                <p className="text-white font-semibold text-sm">
                  {site.footerContactLabels.email}
                </p>

                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-300 text-sm hover:text-brand-orange transition-colors break-all"
                >
                  {contact.email}
                </a>
              </div>
            </li>

            {/* Office Address */}
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-brand-orange mt-0.5 shrink-0"
              />

              <div>
                <p className="text-white font-semibold text-sm">
                  {site.footerContactLabels.address}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {contact.address}
                </p>
              </div>
            </li>

            {/* Factory Address */}
            <li className="flex items-start gap-3">
              <MapPin
                size={18}
                className="text-brand-orange mt-0.5 shrink-0"
              />

              <div>
                <p className="text-white font-semibold text-sm">
                  {site.footerContactLabels.factoryAddress}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {contact.factoryAddress}
                </p>
              </div>
            </li>

          </ul>
        </div>

        {/* Certifications - SEPARATE COLUMN */}
        {/* <div>
          <h4 className="text-white font-bold text-lg mb-3">
            Certifications
          </h4>

          <div className="w-10 h-1 bg-brand-orange rounded-full mb-5" />

          <ul className="flex flex-col gap-3">

            <li>
              <p className="text-white font-semibold text-sm">
                MSME Certificate
              </p>
              <p className="text-gray-300 text-sm break-words">
                {site.certifications.msme}
              </p>
            </li>

            <li>
              <p className="text-white font-semibold text-sm">
                PAN No.
              </p>
              <p className="text-gray-300 text-sm break-words">
                {site.certifications.pan}
              </p>
            </li>

            <li>
              <p className="text-white font-semibold text-sm">
                TAN No.
              </p>
              <p className="text-gray-300 text-sm break-words">
                {site.certifications.tan}
              </p>
            </li>

            <li>
              <p className="text-white font-semibold text-sm">
                GST No.
              </p>
              <p className="text-gray-300 text-sm break-words">
                {site.certifications.gst}
              </p>
            </li>

            <li>
              <p className="text-white font-semibold text-sm">
                ISO Certification
              </p>
              <p className="text-gray-300 text-sm break-words">
                {site.certifications.iso}
              </p>
            </li>

          </ul>
        </div> */}

      </Container>

      {/* Copyright */}
      <div className="border-t border-white/10 py-5">
        <p className="text-center text-gray-400 text-sm">
          Copyright{' '}
          <span className="text-white font-semibold">
            {site.copyrightHolder}
          </span>{' '}
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>

    </footer>
  )
}