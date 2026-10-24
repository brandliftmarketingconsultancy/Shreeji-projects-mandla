
import { Helmet } from 'react-helmet-async'
import ContactHero from '../components/sections/ContactHero.jsx'
import ContactForm from '../components/sections/ContactForm.jsx'
import ContactInfo from '../components/sections/ContactInfo.jsx'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>
          Contact Shreeji Projects | AAC Blocks Supplier in Mandla, MP
        </title>

        <meta
          name="description"
          content="Contact Shreeji Projects in Mandla, MP for AAC blocks, fly ash bricks and paver blocks. Call +91 7067062323 or send an enquiry for a free quote."
        />

        <meta
          name="keywords"
          content="aac block supplier, aac blocks supplier mp, bricks supplier mandla, aac block manufacturers near me, brick suppliers near me, aac bricks near me, fly ash bricks suppliers near me, cover block near me"
        />

        <link
          rel="canonical"
          href="https://shreeji-projects-mandla.vercel.app/contact"
        />
      </Helmet>

      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </>
  )
}
