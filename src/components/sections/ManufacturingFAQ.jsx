
import { manufacturingFaqs } from '../../data/content.js'

export default function ManufacturingFAQ() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brand-blue-dark md:text-4xl">
          Frequently Asked Questions About AAC Block Manufacturing
        </h2>

        <div className="mt-8 divide-y divide-gray-200">
          {manufacturingFaqs.map((faq) => (
            <details key={faq.question} className="py-5">
              <summary className="cursor-pointer text-lg font-semibold text-gray-900">
                {faq.question}
              </summary>
              <p className="mt-3 leading-7 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
