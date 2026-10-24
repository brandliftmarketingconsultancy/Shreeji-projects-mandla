
import { useState } from 'react'
import Container from '../ui/Container.jsx'
import Input from '../ui/Input.jsx'
import Textarea from '../ui/Textarea.jsx'
import Button from '../ui/Button.jsx'
import { contactForm } from '../../data/content.js'

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwCM_kL17U3qIv3I1QHnIk2yxxkSiS4RVEoFAU3bNdSORrwZLoMkl14TZU8JFezFHaoTg/exec'

const initialState = {
  name: '',
  phone: '',
  location: '',
  product: [],
  message: '',
  email: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setField = (field) => (e) => {
    setValues((v) => ({
      ...v,
      [field]: e.target.value,
    }))
  }

  const toggleProduct = (product) => {
    setValues((v) => ({
      ...v,
      product: v.product.includes(product)
        ? v.product.filter((item) => item !== product)
        : [...v.product, product],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setSubmitted(false)
    setError('')

    try {
      const payload = {
        ...values,
        product: values.product.join(', '),
      }

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.error || 'Submission failed')
      }

      setSubmitted(true)
      setValues({ ...initialState })
    } catch (err) {
      console.error('Google Sheets submission error:', err)
      setError(contactForm.errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative z-10">
      <Container>
        <div className="max-w-xl mx-auto -mt-16 sm:-mt-24 bg-white rounded-xl2 shadow-card border border-gray-100 px-6 py-10 sm:px-10 sm:py-12">
          <div className="text-center mb-8">
            <h2 className="text-brand-blue font-extrabold text-2xl sm:text-3xl">
              {contactForm.heading}
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              {contactForm.subtext}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <Input
              id="contact-name"
              label={`${contactForm.nameLabel} *`}
              required
              value={values.name}
              onChange={setField('name')}
            />

            {/* Phone */}
            <Input
              id="contact-phone"
              type="tel"
              label={`${contactForm.phoneLabel} *`}
              required
              value={values.phone}
              onChange={setField('phone')}
            />

            {/* Location */}
            <Input
              id="contact-location"
              label={`${contactForm.locationLabel} *`}
              required
              value={values.location}
              onChange={setField('location')}
            />

            {/* Product selection */}
            <fieldset className="flex flex-col gap-3">
              <legend className="text-sm font-semibold text-gray-700 mb-1">
                {contactForm.productLabel}
              </legend>

              <p className="text-sm text-gray-500">
                Select all products you need.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactForm.productOptions.map((product) => (
                  <label
                    key={product}
                    className="flex items-center gap-3 rounded-lg border border-gray-200 px-3 py-3 text-sm text-gray-700 cursor-pointer hover:border-brand-blue transition-colors"
                  >
                    <input
                      type="checkbox"
                      name="product"
                      value={product}
                      checked={values.product.includes(product)}
                      onChange={() => toggleProduct(product)}
                      className="h-4 w-4 accent-blue-700"
                    />

                    <span>{product}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Message */}
            <Textarea
              id="contact-message"
              label={contactForm.messageLabel}
              placeholder={contactForm.messagePlaceholder}
              value={values.message}
              onChange={setField('message')}
            />

            {/* Email */}
            <Input
              id="contact-email"
              type="email"
              label={contactForm.emailLabel}
              placeholder={contactForm.emailPlaceholder}
              value={values.email}
              onChange={setField('email')}
            />

            {/* Submit */}
            <Button
              type="submit"
              variant="secondary"
              icon={null}
              disabled={loading}
              className="w-full sm:w-auto self-start"
            >
              {loading ? 'Sending...' : contactForm.submitLabel}
            </Button>

            {/* Success */}
            {submitted && (
              <p
                role="status"
                className="text-sm text-brand-blue font-semibold"
              >
                {contactForm.successMessage}
              </p>
            )}

            {/* Error */}
            {error && (
              <p
                role="alert"
                className="text-sm text-red-600 font-semibold"
              >
                {error}
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}
