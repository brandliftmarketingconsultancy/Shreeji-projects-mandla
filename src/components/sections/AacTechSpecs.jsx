import Container from '../ui/Container.jsx'
import { techSpecs } from '../../data/aacblock.js'

export default function AacTechSpecs() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <Container>
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-blue text-center mb-8 sm:mb-10 lg:mb-12">
          {techSpecs.title}
        </h2>

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden sm:block w-full overflow-hidden rounded-xl2 border border-gray-200 shadow-card">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="bg-gray-50">
                <th className="w-[32%] px-5 md:px-7 lg:px-8 py-4 md:py-5 lg:py-6 text-sm md:text-base lg:text-lg font-extrabold uppercase tracking-wide text-gray-900 border-r border-gray-200">
                  {techSpecs.headers[0]}
                </th>

                <th className="w-[68%] px-5 md:px-7 lg:px-8 py-4 md:py-5 lg:py-6 text-sm md:text-base lg:text-lg font-extrabold uppercase tracking-wide text-gray-900">
                  {techSpecs.headers[1]}
                </th>
              </tr>
            </thead>

            <tbody>
              {techSpecs.rows.map((row, i) => (
                <tr
                  key={row.parameter}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'}
                >
                  <td className="px-5 md:px-7 lg:px-8 py-4 md:py-5 lg:py-6 text-sm md:text-base lg:text-lg font-semibold text-gray-700 border-r border-gray-100 align-middle">
                    {row.parameter}
                  </td>

                  <td className="px-5 md:px-7 lg:px-8 py-4 md:py-5 lg:py-6 text-sm md:text-base lg:text-lg text-gray-500 align-middle">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="sm:hidden space-y-3">
          {techSpecs.rows.map((row, i) => (
            <div
              key={row.parameter}
              className="rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              {/* Parameter */}
              <div className="bg-gray-50 px-4 py-3">
                <p className="text-xs font-extrabold uppercase tracking-wide text-gray-900">
                  {techSpecs.headers[0]}
                </p>

                <p className="mt-1 text-sm font-bold text-brand-blue">
                  {row.parameter}
                </p>
              </div>

              {/* Specification */}
              <div className="px-4 py-3 bg-white">
                <p className="text-xs font-extrabold uppercase tracking-wide text-gray-400">
                  {techSpecs.headers[1]}
                </p>

                <p className="mt-1 text-sm font-medium text-gray-600 leading-relaxed">
                  {row.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}