export default function ProductCard({ title, image, href = '#' }) {
  return (
    <a
      href={href}
      className="group relative block rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div
        className="
          absolute left-4 right-4 bottom-0
          translate-y-1/2
          group-hover:translate-y-0
          transition-transform duration-300
          bg-white rounded-xl shadow-md
          py-4 px-5
        "
      >
        <span className="block font-bold text-brand-dark tracking-wide text-sm sm:text-base">
          {title}
        </span>
      </div>
    </a>
  )
}