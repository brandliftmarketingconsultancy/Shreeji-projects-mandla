import { Link } from 'react-router-dom'
import { comingSoonProducts } from '../data/comingSoon.js'

export default function ComingSoon({ slug }) {
  const product = comingSoonProducts[slug]
  if (!product) return null

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-xl text-center">
        <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
          Coming Soon
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold">{product.name}</h1>
        <p className="mt-4 text-gray-600">{product.description}</p>
        <p className="mt-2 text-gray-600">
          Want to know when it launches? Get in touch and we'll keep you updated.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="rounded bg-black px-6 py-3 text-white">
            Contact Us
          </Link>
          <Link to="/" className="rounded border px-6 py-3">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}