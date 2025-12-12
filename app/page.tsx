// app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Top bar */}
      <div className="border-b border-red-600/60 bg-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <p className="text-slate-600">
            Serving Napa • Solano • Sonoma • Contra Costa
          </p>
          <p className="text-slate-800 font-medium">
            Call: (707) 373-5915 · Email: iabeyta@aichateaux.ai
          </p>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
          {/* Logo + Brand */}
          <div className="flex items-center gap-5">
            <div className="relative h-20 w-20">
              <Image
                src="/ai-chateaux-logo.png"
                alt="AI Chateaux Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="text-3xl sm:text-4xl font-bold tracking-wide text-red-700">
                AI Chateaux LLC
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Professional Fiduciary &amp; Estate Services
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden gap-7 text-base font-semibold text-slate-800 md:flex">
            <a
              href="/"
              className="text-red-700 border-b-2 border-red-700 pb-1"
            >
              Home
            </a>
            <a href="/services" className="hover:text-red-700">
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

      {/* Main */}
      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-[3fr,2fr] items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
                Professional Fiduciary &amp; Estate Services
              </h1>
              <p className="text-lg text-slate-700 mb-6">
                AI Chateaux partners with attorneys, families, and courts to
                manage receivership, estate administration, and complex
                real-estate matters throughout Northern California.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/services"
                  className="inline-block bg-red-700 text-white px-10 py-3 rounded-md text-base md:text-lg hover:bg-red-800 transition"
                >
                  View Services
                </a>
                <a
                  href="/contact"
                  className="inline-block border border-red-300 text-slate-900 px-10 py-3 rounded-md text-base md:text-lg hover:border-red-500 transition"
                >
                  Schedule a Call
                </a>
              </div>
            </div>

            <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-red-700 uppercase mb-3">
                Typical Matters
              </p>
              <ul className="text-sm text-slate-800 space-y-2">
                <li>• Estate with multiple or distressed properties</li>
                <li>• Court-involved or code-enforcement cases</li>
                <li>• Families needing a neutral professional</li>
                <li>• Attorneys needing a receivership partner</li>
                <li>• Trust or conservatorship with real property</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Services Summary */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-6 md:px-12 lg:px-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-2 text-center text-slate-900">
              How AI Chateaux Helps
            </h2>
            <p className="text-slate-600 text-center mb-10">
              A single point of coordination for legal, financial, and
              property-related decisions.
            </p>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="bg-white border border-red-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-red-700">
                  Fiduciary &amp; Estates
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  Conservatorships, trust administration, and estate settlement
                  with clear communication and formal reporting.
                </p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• Court accountings &amp; documentation</li>
                  <li>• Beneficiary &amp; family communication</li>
                  <li>• Vendor and professional coordination</li>
                </ul>
              </div>
              <div className="bg-white border border-red-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-red-700">
                  Receivership &amp; Stabilization
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  Property stabilization for distressed and non-performing
                  assets under court or attorney direction.
                </p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• City, code-enforcement, and inspector coordination</li>
                  <li>• Health &amp; safety and habitability issues</li>
                  <li>• Short- and long-term asset plans</li>
                </ul>
              </div>
              <div className="bg-white border border-red-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-red-700">
                  Real Estate Advisory
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  California real-estate experience focused on maximizing net
                  results for estates, trusts, and receiverships.
                </p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• BPOs, valuations, and scenario analysis</li>
                  <li>• Rehab and disposition strategy</li>
                  <li>• Coordination through listing &amp; sale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bio / About Preview */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Meet Isaiah Abeyta
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              AI Chateaux LLC is led by{" "}
              <span className="font-semibold">
                Isaiah Abeyta, MBA, California Licensed Real Estate
                Professional
              </span>
              , with 16+ years of management, project, and contract experience.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              Isaiah focuses on{" "}
              <span className="font-semibold">
                distressed and complex real estate
              </span>{" "}
              — properties tied up in estates, code-enforcement actions, or
              difficult ownership situations. His background includes strategic
              planning, financial analysis, and hands-on coordination with
              contractors, inspectors, and legal teams.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The goal of AI Chateaux is simple:{" "}
              <span className="font-semibold">
                give attorneys, courts, and families one calm, accountable
                professional
              </span>{" "}
              who can organize the moving parts, document every step, and keep
              everyone informed.
            </p>
            <div className="mt-8">
              <a
                href="/about"
                className="inline-block text-red-700 font-semibold hover:text-red-800"
              >
                More about Isaiah &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16 px-6 md:px-12 lg:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Have a Case or Property You Need to Discuss?
            </h2>
            <p className="text-slate-200 mb-8">
              Share a brief overview of the matter—estate, receivership, or
              distressed property—and we&apos;ll respond with practical next
              steps and timelines.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-slate-900 px-10 py-4 rounded-md text-lg font-semibold hover:bg-slate-100 transition"
            >
              Contact AI Chateaux
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} AI Chateaux LLC · All Rights Reserved</p>
      </footer>
    </div>
  );
}
