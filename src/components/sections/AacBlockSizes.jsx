
import Container from '../ui/Container.jsx'
import { aacBlockSizes } from '../../data/aacblock.js'

export default function AacBlockSizes() {
  return (
    <section
      className="bg-gray-50 py-12 sm:py-16 lg:py-24"
      aria-labelledby="aac-block-sizes-title"
    >
      <Container>
        {/* Heading and description */}
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10 lg:mb-12">
          <h2
            id="aac-block-sizes-title"
            className="text-2xl font-extrabold text-brand-blue sm:text-3xl lg:text-4xl"
          >
            {aacBlockSizes.title}
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            {aacBlockSizes.description}
          </p>
        </div>

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden w-full overflow-hidden rounded-xl2 border border-gray-200 bg-white shadow-card sm:block">
          <table className="w-full table-fixed border-collapse text-left">
            <thead>
              <tr className="bg-white">
                {aacBlockSizes.headers.map((header, i) => (
                  <th
                    key={header}
                    scope="col"
                    className={`px-4 py-4 text-xs font-extrabold uppercase tracking-wide text-gray-900 md:px-6 md:py-5 md:text-sm lg:px-8 lg:py-6 ${
                      i !== 2 ? 'border-r border-gray-200' : ''
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {aacBlockSizes.rows.map((row, i) => (
                <tr
                  key={row.thickness}
                  className={
                    i % 2 === 0 ? 'bg-gray-50/70' : 'bg-white'
                  }
                >
                  <td className="border-r border-gray-100 px-4 py-4 text-sm font-bold text-brand-blue md:px-6 md:py-5 md:text-base lg:px-8 lg:py-6">
                    {row.thickness}
                  </td>

                  <td className="border-r border-gray-100 px-4 py-4 text-sm text-gray-600 md:px-6 md:py-5 md:text-base lg:px-8 lg:py-6">
                    {row.inches}
                  </td>

                  <td className="px-4 py-4 text-sm font-medium text-gray-700 md:px-6 md:py-5 md:text-base lg:px-8 lg:py-6">
                    {row.size}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="space-y-3 sm:hidden">
          {aacBlockSizes.rows.map((row) => (
            <div
              key={row.thickness}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              {/* Block thickness */}
              <div className="flex items-center justify-between gap-3 bg-white px-4 py-3">
                <span className="text-xs font-extrabold uppercase tracking-wide text-gray-500">
                  Thickness
                </span>

                <span className="text-base font-extrabold text-brand-blue">
                  {row.thickness}
                </span>
              </div>

              <div className="border-t border-gray-100 px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Thickness (inch, approx.)
                </p>

                <p className="mt-1 text-sm font-medium text-gray-700">
                  {row.inches}
                </p>
              </div>

              <div className="border-t border-gray-100 bg-gray-50/70 px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400">
                  Size (L × H × W)
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {row.size}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
    