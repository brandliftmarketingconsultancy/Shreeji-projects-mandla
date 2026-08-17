import { useState } from 'react'
import { ChevronDown, Menu, X, Phone } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { navLinks, contact } from '../../data/navigation.js'
import { site } from '../../data/site.js'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <Container className="flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-11 h-11 rounded-lg bg-brand-blue flex items-center justify-center">
            <span className="text-white font-black text-lg">{site.logoInitial}</span>
          </div>
          <div className="leading-tight">
            <p className="font-extrabold text-brand-blue text-lg tracking-tight">
              {site.brandName} <span className="text-brand-orange">{site.brandNameAccent}</span>
            </p>
            <p className="text-[10px] uppercase tracking-wide text-gray-500">
              {site.brandTagline}
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => link.children && setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 px-4 py-2.5 rounded-lg font-semibold text-sm text-brand-dark hover:bg-brand-orange hover:text-white transition-colors duration-200"
              >
                {link.label}
                {link.children && <ChevronDown size={15} />}
              </a>

              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-xl shadow-card-hover border border-gray-100 py-2">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-orange/10 hover:text-brand-orange transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${contact.phone.replace(/\s/g, '')}`}
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-brand-orange text-white px-4 py-2.5 text-sm font-semibold hover:bg-brand-orange-dark transition-colors"
          >
            <Phone size={16} />
            {contact.phoneDisplay}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg text-brand-dark hover:bg-gray-100"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <Container className="py-3 flex flex-col">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-50 last:border-0">
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-3 font-semibold text-brand-dark text-sm"
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.label ? null : link.label)
                  }
                >
                  <a href={link.href}>{link.label}</a>
                  {link.children && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
                {link.children && openDropdown === link.label && (
                  <div className="pb-2 pl-3 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="py-2 text-sm text-gray-600"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange text-white px-4 py-3 text-sm font-semibold"
            >
              <Phone size={16} /> Call {contact.phoneDisplay}
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}
