import { Truck, Users, Zap, PiggyBank, ArrowRight, Feather } from 'lucide-react'
import Button from './Button.jsx'

const iconMap = { truck: Truck, users: Users, zap: Zap, piggyBank: PiggyBank, feather: Feather }

/**
 * Reusable alternating image/copy split block.
 * @param {'left'|'right'} imageSide - which side the image sits on (desktop)
 */
export default function PromoSplit({
  imageSide = 'right',
  image,
  imageAlt,
  badge,
  title,
  description,
  points = [],
  cta,
  ctaHref = '#',
  ctaVariant = 'outline',
}) {
  const imageCol = (
    <div className="relative w-full">
      <img
        src={image}
        alt={imageAlt}
        className="w-full rounded-2xl object-cover aspect-[4/3] shadow-card"
      />
      {badge && (
        <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-8 sm:w-64 bg-brand-blue rounded-xl shadow-card-hover px-5 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0">
            {(() => {
              const Icon = iconMap[badge.icon] ?? Feather
              return <Icon size={18} className="text-white" />
            })()}
          </div>
          <p className="text-white font-bold text-sm leading-snug">{badge.label}</p>
        </div>
      )}
    </div>
  )

  const textCol = (
    <div className="flex flex-col gap-5 justify-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
        {title}
      </h2>
      <p className="text-gray-600 text-base leading-relaxed">{description}</p>

      {points.length > 0 && (
        <div className="flex flex-wrap gap-x-8 gap-y-4 mt-2">
          {points.map((pt) => {
            const Icon = iconMap[pt.icon] ?? Zap
            return (
              <div key={pt.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <Icon size={18} className="text-brand-blue" />
                </div>
                <span className="font-bold text-brand-dark text-sm">{pt.label}</span>
              </div>
            )
          })}
        </div>
      )}

      {cta && (
        <Button href={ctaHref} variant={ctaVariant} className="w-fit mt-2">
          {cta}
        </Button>
      )}
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-10">
      {imageSide === 'left' ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </div>
  )
}
