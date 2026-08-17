import { Box, Package, Bookmark, Check } from 'lucide-react'
import Container from '../ui/Container.jsx'
import { flyAshComparison } from '../../data/flyashbricks.js'

const colIcons = [null, Box, Package, Bookmark]

export default function FlyAshComparison() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <Container>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue text-center mb-10">
          {flyAshComparison.title}
        </h2>

        {/* Table view — tablet & up */}
        <div className="hidden md:block overflow-x-auto rounded-xl2 shadow-card border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-orange">
                {flyAshComparison.columns.map((col, i) => {
                  const Icon = colIcons[i]
                  return (
                    <th
                      key={col}
                      className="px-3 lg:px-5 py-4 text-[11px] lg:text-sm font-bold uppercase tracking-wide text-white whitespace-nowrap"
                    >
                      <span className="inline-flex items-center gap-1.5 lg:gap-2">
                        {Icon && <Icon size={15} className="shrink-0" />}
                        {col}
                      </span>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {flyAshComparison.rows.map((row, i) => (
                <tr key={row.parameter} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-3 lg:px-5 py-4 text-xs lg:text-sm font-semibold text-gray-700">
                    {row.parameter}
                  </td>
                  <td className="px-3 lg:px-5 py-4 text-xs lg:text-sm font-semibold text-brand-blue bg-brand-orange/5">
                    {row.a}
                  </td>
                  <td className="px-3 lg:px-5 py-4 text-xs lg:text-sm text-gray-500">{row.b}</td>
                  <td className="px-3 lg:px-5 py-4 text-xs lg:text-sm text-gray-500">{row.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card view — mobile only */}
        <div className="md:hidden flex flex-col gap-4">
          {flyAshComparison.rows.map((row) => (
            <div
              key={row.parameter}
              className="rounded-xl2 shadow-card border border-gray-100 bg-white overflow-hidden"
            >
              <div className="bg-brand-orange px-4 py-3">
                <p className="text-white font-bold text-sm">{row.parameter}</p>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="flex items-center justify-between gap-3 px-4 py-3 bg-brand-orange/5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue uppercase tracking-wide">
                    <Check size={13} />
                    {flyAshComparison.columns[1]}
                  </span>
                  <span className="text-sm font-semibold text-brand-blue text-right">
                    {row.a}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                    {flyAshComparison.columns[2]}
                  </span>
                  <span className="text-sm text-gray-600 text-right">{row.b}</span>
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                    {flyAshComparison.columns[3]}
                  </span>
                  <span className="text-sm text-gray-600 text-right">{row.c}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}