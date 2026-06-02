// app/fees/page.tsx
import Image from "next/image";

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Top bar */}
      <div className="border-b border-red-600/60 bg-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <p className="text-slate-600">
            Serving Napa • Solano • Sonoma • Contra Costa
          </p>
          <p className="text-slate-800 font-medium">
            Call: (707) 373-5915 · Email: iabeyta@aifiduciary.ai
          </p>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
          <div className="flex items-center gap-5">
            <div className="relative h-20 w-20">
              <Image
                src="/ai-chateaux-logo.png"
                alt="AI Fiduciary Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-tight">
              <p className="text-3xl sm:text-4xl font-bold tracking-wide text-red-700">
                AI Fiduciary
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                California Licensed Professional Fiduciary No. 1642
              </p>
            </div>
          </div>

          <nav className="hidden gap-7 text-base font-semibold text-slate-800 md:flex">
            <a href="/" className="hover:text-red-700">
              Home
            </a>

            <a href="/services" className="hover:text-red-700">
              Services
            </a>

            <a href="/about" className="hover:text-red-700">
              About
            </a>

            <a
              href="/fees"
              className="text-red-700 border-b-2 border-red-700 pb-1"
            >
              Fees
            </a>

            <a href="/contact" className="hover:text-red-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl">
            <p className="text-red-700 font-semibold tracking-wide uppercase mb-3">
              Fee Schedule
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Professional Fiduciary Services Fee Schedule
            </h1>

            <p className="text-lg text-slate-700 mb-6 max-w-4xl">
              AI Fiduciary provides transparent fiduciary billing for trust
              administration, conservatorship matters, estate coordination,
              property oversight, and related fiduciary services. Fees vary
              depending on the complexity, scope, urgency, and level of service
              required for each matter.
            </p>

            <p className="text-base text-slate-600 mb-8 max-w-4xl">
              This fee schedule is provided for informational purposes only.
              Court approval, governing documents, written agreements, and the
              facts of each engagement may affect final compensation.
            </p>

            <a
              href="/ai-fiduciary-fee-schedule.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800 transition"
            >
              Download Fee Schedule PDF
            </a>
          </div>
        </section>

        {/* Fee Table */}
        <section className="bg-slate-50 px-6 md:px-12 lg:px-24 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-xl border border-red-200 bg-white shadow-sm">
              <table className="w-full border-collapse text-left">
                <thead className="bg-red-700 text-white">
                  <tr>
                    <th className="p-4">Service</th>
                    <th className="p-4">Rate</th>
                  </tr>
                </thead>

                <tbody className="text-slate-800">
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Licensed Professional Fiduciary</td>
                    <td className="p-4">$225/hour</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Associate Licensed Fiduciary</td>
                    <td className="p-4">$175/hour</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Fiduciary Case Coordination</td>
                    <td className="p-4">$135/hour</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Administration Support</td>
                    <td className="p-4">$85/hour</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Extraordinary Services</td>
                    <td className="p-4">$250-$275/hour</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Emergency / Weekend / Holiday</td>
                    <td className="p-4">1.5x Standard Rate</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Travel Time</td>
                    <td className="p-4">50% Standard Hourly Rate</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="p-4">Air Travel</td>
                    <td className="p-4">$500/day + Expenses</td>
                  </tr>
                  <tr>
                    <td className="p-4">Ongoing Administration Retainer</td>
                    <td className="p-4">$600/month where applicable</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-600 mt-4">
              All services are billed in increments of one-tenth (.10) of an
              hour.
            </p>
          </div>
        </section>

        {/* Details */}
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
          <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-red-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700 mb-3">
                Rate Lock Provision
              </h2>
              <p className="text-slate-700 leading-7">
                Client rates remain fixed for the duration of the engagement
                unless otherwise agreed in writing.
              </p>
            </div>

            <div className="rounded-xl border border-red-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700 mb-3">
                Ongoing Administration Retainer
              </h2>
              <p className="text-slate-700 leading-7">
                Applicable to active matters requiring ongoing fiduciary
                oversight, administration, and availability.
              </p>
            </div>
          </div>
        </section>

        {/* Typical Services */}
        <section className="bg-slate-50 px-6 md:px-12 lg:px-24 py-16">
          <div className="mx-auto max-w-5xl rounded-xl border border-red-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-red-700 mb-6">
              Typical Services Include
            </h2>

            <ul className="grid gap-2 text-slate-700 md:grid-cols-2">
              <li>• Trust Administration</li>
              <li>• Conservatorship Support</li>
              <li>• Estate Administration</li>
              <li>• Bill Payment & Budgeting</li>
              <li>• Financial Oversight</li>
              <li>• Real Estate Coordination</li>
              <li>• Vendor Management</li>
              <li>• Asset Inventory</li>
              <li>• Beneficiary Communication</li>
              <li>• Property Preservation & Oversight</li>
              <li>• Court Reporting Coordination</li>
              <li>• Property Disposition Oversight</li>
              <li>• Care Coordination Support</li>
              <li>• Court Appearances</li>
              <li>• Mediation Participation</li>
              <li>• Probate Hearings</li>
            </ul>
          </div>
        </section>

        {/* Costs and Disclosures */}
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="rounded-xl border border-red-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700 mb-4">
                Third-Party Costs
              </h2>

              <p className="text-slate-700 leading-7">
                The client, trust, or estate may also incur additional
                third-party costs including attorney fees, CPA fees, court
                costs, appraisal fees, contractor or vendor costs,
                postage/copying, filing fees, bond premiums, and property
                expenses. These expenses are billed separately from fiduciary
                compensation.
              </p>
            </div>

            <div className="rounded-xl border border-red-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-red-700 mb-4">
                General Disclosures
              </h2>

              <ul className="space-y-2 text-slate-700 leading-7">
                <li>• Detailed billing records are maintained.</li>
                <li>• Invoices are generally provided monthly.</li>
                <li>• Court approval is obtained where applicable.</li>
                <li>• Retainers may be required depending on matter complexity.</li>
                <li>
                  • AI Fiduciary is not a law firm and does not provide legal
                  services.
                </li>
                <li>
                  • Alternative compensation arrangements may be considered for
                  select trust and estate engagements where appropriate.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-black text-white px-6 md:px-12 lg:px-24 py-12">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Download the Full Fee Schedule
            </h2>

            <p className="text-slate-300 mb-6">
              For a printable version of the fee schedule, download the PDF or
              contact AI Fiduciary to discuss the scope of your matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ai-fiduciary-fee-schedule.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800 transition"
              >
                Download Fee Schedule PDF
              </a>

              <a
                href="/contact"
                className="inline-block border border-red-400 text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
              >
                Contact AI Fiduciary
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}