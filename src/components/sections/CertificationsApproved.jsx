import { BadgeCheck, FileText, Award, ShieldCheck, CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { certifications, hero } from '../../data/content.js'

const iconMap = {
  'badge-check': BadgeCheck,
  'file-text': FileText,
  award: Award,
  'shield-check': ShieldCheck,
}

export default function CertificationsApproved() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <Container>
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-brand-blue font-black text-3xl sm:text-4xl">
            {certifications.heading}
          </h2>
          <p className="mt-3 text-gray-600">{certifications.subheading}</p>
        </div>

        {/* Certification details */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.items.map(({ title, value, icon }) => {
            const Icon = iconMap[icon] ?? BadgeCheck
            return (
              <div
                key={title}
                className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <Icon size={22} className="text-brand-blue" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {title}
                </p>
                <p className="mt-1 text-lg font-bold text-brand-dark break-words">{value}</p>
              </div>
            )
          })}
        </div>

        {/* Approved for */}
        <div className="mt-16">
          <h3 className="text-center text-brand-orange font-extrabold uppercase tracking-wide text-xl sm:text-2xl">
            {hero.approvedFor.label}
          </h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {hero.approvedFor.items.map(({ name }) => (
              <li
                key={name}
                className="flex items-center gap-3 rounded-xl bg-brand-blue px-5 py-4 text-white font-semibold shadow-md"
              >
                <CheckCircle2 size={22} className="text-brand-orange shrink-0" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}