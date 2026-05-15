// app/services/page.tsx
import Image from "next/image";

export default function ServicesPage() {
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
          {/* Logo + Brand */}
          <div className="flex items-center gap-5">
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <Image
                src="/ai-chateaux-logo.png"
                alt="AI Chateaux Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-2xl sm:text-3xl font-bold tracking-wide text-red-700">
                AI Fiduciary
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                California Licensed Professional Fiduciary No. 1642 
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden gap-7 text-base font-semibold text-slate-800 md:flex">
            <a href="/" className="hover:text-red-700">
              Home
            </a>
            <a
              href="/services"
              className="text-red-700 border-b-2 border-red-700 pb-1"
            >
              Services
            </a>
            <a href="/about" className="hover:text-red-700">
              Fiduciary
            </a>
            <a href="/contact" className="hover:text-red-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-white">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold tracking-wide text-red-700 uppercase mb-3">
              Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              California Licensed Professional Fiduciary Services for Families, Attorneys, and Courts
            </h1>
            <p className="text-slate-700 text-base md:text-lg">
              AI Fiduciary partners with attorneys, families, and courts to
              manage probate, trust, and conservatorship matters where real
              estate, beneficiaries, and compliance all intersect.
            </p>
          </div>
        </section>

        {/* Three primary categories */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-slate-50 border-y border-slate-200">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-3 text-red-700">
                  Fiduciary &amp; Estates
                </h2>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• Probate &amp; trust administration</li>
                  <li>• Conservatorship of estate</li>
                  <li>• Beneficiary communication &amp; reporting</li>
                  <li>• Court-ready accountings &amp; documentation</li>
                </ul>
              </div>

              <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-3 text-red-700">
                  Stabilization &amp; Receivership Support
                </h2>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• Property stabilization &amp; securement</li>
                  <li>• Code-enforcement &amp; city coordination</li>
                  <li>• Health &amp; safety / habitability issues</li>
                  <li>• 30–90 day action plans</li>
                </ul>
              </div>

              <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-3 text-red-700">
                  Real Estate Advisory
                </h2>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• BPOs, CMAs, and value scenarios</li>
                  <li>• Rehab planning &amp; contractor oversight</li>
                  <li>• Hold, rent, or sell recommendations</li>
                  <li>• Support for court-supervised sales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-black mb-6">
      Why Families & Attorneys Choose AI Fiduciary
    </h2>

    <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-lg">
      <p>• California Licensed Professional Fiduciary</p>
      <p>• MBA & operational management background</p>
      <p>• Organized documentation and communication systems</p>
      <p>• Experience coordinating complex property and estate matters</p>
      <p>• Real estate and valuation familiarity</p>
      <p>• Technology-forward administrative workflows</p>
      <p>• Local Northern California focus</p>
      <p>• Professional, neutral, and transparent administration approach</p>
    </div>
  </div>
</section>
        {/* Typical matters / examples */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-white">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-[3fr,2fr] items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Typical Matters
              </h2>
              <p className="text-slate-700 mb-4">
                Cases often involve overlapping legal, financial, and
                property-related issues. AI Fiduciary focuses on:
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>
                  • Estates with multiple properties or long-deferred
                  maintenance
                </li>
                <li>
                  • Trusts or conservatorships where beneficiaries are in
                  conflict
                </li>
                <li>
                  • Code-enforcement and city compliance issues tied to real
                  property
                </li>
                <li>
                  • Situations where a neutral, accountable professional is
                  needed
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-red-200 rounded-xl p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-red-700 uppercase mb-3">
                For Attorneys &amp; Courts
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• Clear written plans with timelines and milestones</li>
                <li>• Regular reporting you can attach to filings</li>
                <li>• Documentation to support decisions and fee requests</li>
                <li>• Coordination with agents, contractors, and vendors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold mb-4 text-slate-900">
              How Engagements Typically Work
            </h2>
            <ol className="space-y-4 text-sm text-slate-700">
              <li>
                <span className="font-semibold">1. Introductory Call.</span>{" "}
                Brief overview of the matter, parties involved, and key
                deadlines or hearings.
              </li>
              <li>
                <span className="font-semibold">2. Document &amp; Property Review.</span>{" "}
                Review existing pleadings, orders, notices, and property
                information.
              </li>
              <li>
                <span className="font-semibold">3. Written Plan.</span> Outline
                of recommended steps, estimated timelines, and coordination
                needs.
              </li>
              <li>
                <span className="font-semibold">4. Ongoing Management.</span>{" "}
                Execution of the plan with regular updates to counsel,
                beneficiaries, and the court as required.
              </li>
              <li>
                <span className="font-semibold">5. Resolution &amp; Reporting.</span>{" "}
                As properties are sold, stabilized, or distributed, records and
                summaries are provided to support final accountings and closure.
              </li>
            </ol>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-red-700 text-white px-10 py-3 rounded-md text-base hover:bg-red-800 transition"
              >
                Discuss a Matter
              </a>
            </div>
          </div>
        </section>
        </main>

      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        <p>
          ©© {new Date().getFullYear()} AI Fiduciary · Isaiah Abeyta, MBA · California Licensed Professional Fiduciary No. 1642 · Serving Napa, Solano, Sonoma & Contra Costa Counties
        </p>
      </footer>
    </div>
  );
}