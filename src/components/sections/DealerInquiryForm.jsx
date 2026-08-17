import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { dealerForm } from '../../data/dealerInquiry.js'

const initialState = {
  name: '',
  business: '',
  phone: '',
  location: '',
  requirement: dealerForm.requirementOptions[0],
}

export default function DealerInquiryForm() {
  const [formData, setFormData] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire this up to a real submit handler (API endpoint, email
    // service, or CRM webhook) — this currently just shows a success state.
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="py-16 sm:py-24 bg-white">
        <Container className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={32} className="text-brand-orange" />
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-blue mb-2">
            {dealerForm.successMessage}
          </h2>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-blue mb-2">
            {dealerForm.heading}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">{dealerForm.subtext}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl2 shadow-card border border-gray-100 p-6 sm:p-8 flex flex-col gap-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
              {dealerForm.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
            />
          </div>

          <div>
            <label htmlFor="business" className="block text-sm font-semibold text-gray-700 mb-1.5">
              {dealerForm.businessLabel}
            </label>
            <input
              id="business"
              name="business"
              type="text"
              required
              value={formData.business}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
              {dealerForm.phoneLabel}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-1.5">
              {dealerForm.locationLabel}
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
            />
          </div>

          <div>
            <label htmlFor="requirement" className="block text-sm font-semibold text-gray-700 mb-1.5">
              {dealerForm.requirementLabel}
            </label>
            <select
              id="requirement"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange"
            >
              {dealerForm.requirementOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-3 text-sm sm:text-base font-semibold transition-colors"
          >
            {dealerForm.submitLabel}
          </button>
        </form>
      </Container>
    </section>
  )
}