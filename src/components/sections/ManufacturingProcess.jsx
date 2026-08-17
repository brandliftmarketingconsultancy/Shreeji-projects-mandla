import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { processSteps } from '../../data/manufacturing.js'

export default function ManufacturingProcess() {
  const markerRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - window.innerHeight / 2) -
              Math.abs(b.boundingClientRect.top - window.innerHeight / 2)
          )

        if (visibleEntries.length > 0) {
          const index = Number(
            visibleEntries[0].target.dataset.index
          )

          setActiveIndex(index)
        }
      },
      {
        threshold: 0,
        rootMargin: '-40% 0px -40% 0px',
      }
    )

    markerRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const total = processSteps.length

  const progressPercent =
    activeIndex >= 0
      ? ((activeIndex + 1) / total) * 100
      : 0

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <Container>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#E67E0A] font-semibold text-sm uppercase tracking-wide mb-2">
            How It&rsquo;s Made
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#07396E]">
            Our Manufacturing Process
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Base Track */}
          <div
            className="
              absolute
              left-6
              md:left-1/2
              top-0
              bottom-0
              w-1
              md:-translate-x-1/2
              bg-gray-200
              rounded-full
            "
          />

          {/* Active Progress */}
          <div
            className="
              absolute
              left-6
              md:left-1/2
              top-0
              w-1
              md:-translate-x-1/2
              bg-[#07396E]
              rounded-full
              transition-all
              duration-500
              ease-out
            "
            style={{
              height: `${progressPercent}%`,
            }}
          />

          <div className="flex flex-col gap-12 md:gap-16">

            {processSteps.map((step, i) => {
              const isActive = i <= activeIndex
              const isCurrent = i === activeIndex
              const isLeft = i % 2 === 0

              const card = (
                <div
                  className={`
                    rounded-xl2
                    shadow-card
                    p-6
                    sm:p-7
                    transition-all
                    duration-500

                    ${
                      isCurrent
                        ? 'bg-[#E67E0A]/10 border border-[#E67E0A]/25'
                        : isActive
                          ? 'bg-[#07396E]/5 border border-[#07396E]/15'
                          : 'bg-gray-50 border border-transparent'
                    }
                  `}
                >
                  <h3
                    className={`
                      font-extrabold
                      text-lg
                      sm:text-xl
                      mb-3
                      transition-colors
                      duration-500

                      ${
                        isCurrent
                          ? 'text-[#E67E0A]'
                          : isActive
                            ? 'text-[#07396E]'
                            : 'text-[#07396E]'
                      }
                    `}
                  >
                    {step.title}:
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )

              return (
                <div
                  key={step.title}
                  className="
                    relative
                    grid
                    md:grid-cols-2
                    md:gap-16
                    items-center
                  "
                >

                  {/* Marker */}
                  <div
                    ref={(el) => {
                      markerRefs.current[i] = el
                    }}
                    data-index={i}
                    className={`
                      absolute
                      left-6
                      md:left-1/2
                      top-6
                      md:top-1/2
                      -translate-x-1/2
                      md:-translate-y-1/2
                      w-9
                      h-9
                      rounded-full
                      border-4
                      flex
                      items-center
                      justify-center
                      z-10
                      transition-all
                      duration-500

                      ${
                        isCurrent
                          ? 'bg-[#E67E0A] border-[#E67E0A] scale-110'
                          : isActive
                            ? 'bg-[#07396E] border-[#07396E]'
                            : 'bg-white border-gray-300'
                      }
                    `}
                  >
                    <ArrowDown
                      size={14}
                      strokeWidth={2.5}
                      className={
                        isActive
                          ? 'text-white'
                          : 'text-gray-400'
                      }
                    />
                  </div>

                  {/* Cards */}
                  {isLeft ? (
                    <>
                      <div className="pl-16 md:pl-0 md:pr-8">
                        {card}
                      </div>

                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />

                      <div className="pl-16 md:pl-8">
                        {card}
                      </div>
                    </>
                  )}

                </div>
              )
            })}

          </div>
        </div>

      </Container>
    </section>
  )
}