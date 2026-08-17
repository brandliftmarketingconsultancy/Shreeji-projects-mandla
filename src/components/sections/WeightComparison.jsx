import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'
import { weightComparison as wc } from '../../data/content.js'

export default function WeightComparison() {
  return (
    <section className="relative bg-brand-blue overflow-hidden">
      {/* brick pattern backdrop */}
       <div
    className="absolute inset-0 opacity-[0.18] pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='240' height='140' viewBox='0 0 240 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='.35' stroke-width='2'%3E%3Cpath d='M0 0H240M0 70H240M0 140H240'/%3E%3Cpath d='M0 0V70M120 0V70M240 0V70'/%3E%3Cpath d='M60 70V140M180 70V140'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '240px 140px',
    }}
  />
      <div className="absolute inset-0 bg-gradient-to-r  via-brand-blue/95 to-brand-orange/20" />

      <Container className="relative py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 flex items-end gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-40 rounded-md bg-gradient-to-b from-orange-300 to-orange-500 shadow-lg" />
              <span className="text-white font-black text-xl">{wc.heavyWeight}</span>
              <span className="text-white/70 text-xs uppercase tracking-wide">{wc.heavyLabel}</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-52 rounded-md bg-gradient-to-b from-brand-orange to-brand-orange-dark shadow-lg flex items-center justify-center">
                <span className="text-white font-black text-xs rotate-90 whitespace-nowrap">
                  {wc.lightBlockText}
                </span>
              </div>
              <span className="text-white font-black text-xl">{wc.lightWeight}</span>
              <span className="text-white/70 text-xs uppercase tracking-wide">{wc.lightLabel}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl leading-tight">
            {wc.titlePrefix}
            <span className="text-brand-orange">{wc.titleHighlight}</span>
            {wc.titleSuffix}
          </h2>
          <p className="text-white/85 text-base">{wc.description}</p>
          <Button href={wc.ctaHref} variant="primary" className="w-fit">
            {wc.cta}
          </Button>
        </div>
      </Container>
    </section>
  )
}
