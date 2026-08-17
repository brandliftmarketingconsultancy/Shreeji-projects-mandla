import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { aacFaq } from '../../data/aacblock.js'

export default function AacFaq() {
  const [activeTab, setActiveTab] = useState(0)
  const [openIndex, setOpenIndex] = useState(0)

  const questions = aacFaq.tabs[activeTab].questions

  function handleTabChange(index) {
    setActiveTab(index)
    setOpenIndex(0)
  }

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark text-center mb-10">
          {aacFaq.title}
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {aacFaq.tabs.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => handleTabChange(i)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeTab === i
                  ? 'bg-brand-orange text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {questions.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.question}
                className="rounded-xl2 border border-gray-100 shadow-card overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                >
                  <span className="font-bold text-brand-dark text-sm sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-brand-orange transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 -mt-1">
                    <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}