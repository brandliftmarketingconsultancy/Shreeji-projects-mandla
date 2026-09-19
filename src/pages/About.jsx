import AboutHero from '../components/sections/AboutHero.jsx'
import WhoWeAre from '../components/sections/WhoWeAre.jsx'
import AboutStats from '../components/sections/AboutStats.jsx'
import WhyPartner from '../components/sections/WhyPartner.jsx'
import Awards from '../components/sections/Awards.jsx'
import CertificationsApproved from '../components/sections/CertificationsApproved.jsx'

export default function About() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <AboutStats />
      <WhyPartner />
      <CertificationsApproved />
      <Awards />
    </>
  )
}