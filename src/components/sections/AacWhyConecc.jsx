import Container from '../ui/Container.jsx'
import { whyConecc } from '../../data/aacblock.js'

export default function AacWhyConecc() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue text-center mb-8">
          {whyConecc.title}
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-4 mb-12">
          {whyConecc.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-gray-600 leading-relaxed text-sm sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyConecc.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl2 overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-200 bg-white"
            >
              <img
                src={card.image}
                alt={card.imageAlt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-brand-blue text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}