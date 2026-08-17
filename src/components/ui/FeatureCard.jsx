import { Feather, ShieldOff, Flame, Droplets, Zap } from 'lucide-react'

const iconMap = {
  feather: Feather,
  'shield-ban': ShieldOff,
  flame: Flame,
  droplets: Droplets,
  zap: Zap,
}

export default function FeatureCard({ icon, title, description, className = '' }) {
  const Icon = iconMap[icon] ?? Zap

  return (
    <div
      className={`bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 p-8 flex flex-col items-center text-center gap-4 border border-gray-100 ${className}`}
    >
      <div className="w-14 h-14 rounded-full bg-brand-orange/10 flex items-center justify-center">
        <Icon className="text-brand-orange" size={26} strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold text-brand-dark">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
