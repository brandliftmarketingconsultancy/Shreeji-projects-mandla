import { ArrowRight, Phone } from 'lucide-react'

const variants = {
  primary:
    'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-sm hover:shadow-md',
  secondary:
    'bg-brand-blue text-white hover:bg-brand-blue-light shadow-sm hover:shadow-md',
  outline:
    'bg-transparent text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white',
  ghost: 'bg-white/10 text-white border border-white/40 hover:bg-white/20',
}

/**
 * @param {'primary'|'secondary'|'outline'|'ghost'} variant
 * @param {'arrow'|'phone'|null} icon
 */
export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon = 'arrow',
  className = '',
  as,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-sm sm:text-base transition-all duration-200 ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {icon === 'arrow' && <ArrowRight size={18} strokeWidth={2.5} />}
      {icon === 'phone' && <Phone size={16} strokeWidth={2.5} />}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  )
}
