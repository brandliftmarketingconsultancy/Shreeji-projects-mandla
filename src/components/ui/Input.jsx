export default function Input({
  label,
  required = false,
  id,
  className = '',
  ...rest
}) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-brand-blue font-bold text-sm mb-2">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <input
        id={id}
        required={required}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-brand-dark placeholder:text-gray-400 outline-none transition-colors focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
        {...rest}
      />
    </div>
  )
}