import { useState } from 'react'
import Container from '../ui/Container.jsx'
import Input from '../ui/Input.jsx'
import Textarea from '../ui/Textarea.jsx'
import RadioGroup from '../ui/RadioGroup.jsx'
import Button from '../ui/Button.jsx'
import { contactForm } from '../../data/content.js'

const initialState = {
  name: '',
  phone: '',
  location: '',
  product: '',
  message: '',
  email: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const setField = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to the real lead-submission endpoint / CRM webhook.
    console.log('Contact form submitted:', values)
    setSubmitted(true)
    setValues(initialState)
  }

  return (
    <section className="relative z-10">
      <Container>
        <div className="max-w-xl mx-auto -mt-16 sm:-mt-24 bg-white rounded-xl2 shadow-card border border-gray-100 px-6 py-10 sm:px-10 sm:py-12">
          <div className="text-center mb-8">
            <h2 className="text-brand-blue font-extrabold text-2xl sm:text-3xl">
              {contactForm.heading}
            </h2>
            <p className="text-gray-500 text-sm mt-2">{contactForm.subtext}</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
              id="contact-name"
              label={contactForm.nameLabel}
              required
              value={values.name}
              onChange={setField('name')}
            />
            <Input
              id="contact-phone"
              type="tel"
              label={contactForm.phoneLabel}
              required
              value={values.phone}
              onChange={setField('phone')}
            />
            <Input
              id="contact-location"
              label={contactForm.locationLabel}
              required
              value={values.location}
              onChange={setField('location')}
            />
            <RadioGroup
              name="product"
              label={contactForm.productLabel}
              options={contactForm.productOptions}
              value={values.product}
              onChange={(val) => setValues((v) => ({ ...v, product: val }))}
            />
            <Textarea
              id="contact-message"
              label={contactForm.messageLabel}
              value={values.message}
              onChange={setField('message')}
            />
            <Input
              id="contact-email"
              type="email"
              label={contactForm.emailLabel}
              placeholder={contactForm.emailPlaceholder}
              value={values.email}
              onChange={setField('email')}
            />

            <Button type="submit" variant="secondary" icon={null} className="w-full sm:w-auto self-start">
              {contactForm.submitLabel}
            </Button>

            {submitted && (
              <p className="text-sm text-brand-blue font-semibold">
                Thanks — we've received your message and will be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  )
}