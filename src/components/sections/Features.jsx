import Container from '../ui/Container.jsx'
import FeatureCard from '../ui/FeatureCard.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { features, featuresSection } from '../../data/content.js'

export default function Features() {
  const [first3, last2] = [features.slice(0, 3), features.slice(3)]

  return (
    <section className="relative py-20 bg-gradient-to-b from-brand-blue/5 to-white overflow-hidden">
      <div className="absolute -right-40 top-0 w-[36rem] h-[36rem] rounded-full bg-brand-blue/5 -z-0" />
      <Container className="relative flex flex-col items-center gap-12">
        <SectionHeading
          eyebrow={featuresSection.eyebrow}
          title={featuresSection.title}
          highlight={featuresSection.titleHighlight}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {first3.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
          {last2.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </Container>
    </section>
  )
}
