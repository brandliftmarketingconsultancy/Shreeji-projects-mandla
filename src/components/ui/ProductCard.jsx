export default function ProductCard({
  title,
  image,
  imageAlt,
  description,
  href = '#',
}) {
  return (
    <a
      href={href}
      className="
        group flex h-full flex-col overflow-hidden rounded-2xl
        bg-white border border-gray-100 shadow-card
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-card-hover
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500
      "
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={imageAlt || title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-brand-dark sm:text-xl">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
            {description}
          </p>
        )}

        {/* mt-auto pushes the link to the bottom, so all cards line up */}
        <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-orange-500 sm:text-base">
          View details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.69l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </a>
  )
}