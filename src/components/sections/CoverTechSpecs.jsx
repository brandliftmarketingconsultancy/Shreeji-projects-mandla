import Container from '../ui/Container.jsx'
import { coverTechSpecs } from '../../data/coverblocks.js'

export default function CoverTechSpecs() {
  const mid = Math.ceil(coverTechSpecs.rows.length / 2)
  const leftRows = coverTechSpecs.rows.slice(0, mid)
  const rightRows = coverTechSpecs.rows.slice(mid)

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue text-center mb-10">
          {coverTechSpecs.title}
        </h2>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
          {[leftRows, rightRows].map((rows, colIndex) => (
            <div
              key={colIndex}
              className="rounded-xl2 shadow-card overflow-hidden border border-gray-100"
            >
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50">
                    {coverTechSpecs.headers.map((header) => (
                      <th
                        key={header}
                        className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-brand-blue"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.parameter}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-gray-700">
                        {row.parameter}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}