export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignment =
    align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="text-brand-orange font-semibold tracking-wide uppercase text-xs sm:text-sm">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold leading-tight ${
          light ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title} {highlight && <span className="text-brand-orange">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg ${light ? 'text-white/80' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
