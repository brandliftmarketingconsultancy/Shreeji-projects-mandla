export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  className = '',
}) {
  return (
    <div className={className}>
      {label && <p className="text-brand-blue font-bold text-sm mb-2">{label}</p>}
      <div className="flex flex-wrap gap-x-8 gap-y-3">
        {options.map((option) => (
          <label
            key={option}
            className="inline-flex items-center gap-2 text-sm text-brand-dark cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange?.(e.target.value)}
              className="w-4 h-4 accent-brand-orange"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}