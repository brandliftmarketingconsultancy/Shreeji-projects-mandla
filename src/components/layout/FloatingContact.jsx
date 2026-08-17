import { Phone, MessageCircle } from 'lucide-react'
import { contact } from '../../data/navigation.js'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919342238451"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle size={26} fill="white" />
      </a>
      <a
        href={`tel:${contact.phone.replace(/\s/g, '')}`}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <Phone size={22} fill="white" />
      </a>
    </div>
  )
}
