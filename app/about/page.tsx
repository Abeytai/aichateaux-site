// app/about/page.tsx
import Image from "next/image";

export default function FiduciaryPage() {
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
                AI Chateaux LLC
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Professional Fiduciary &amp; Estate Services
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden gap-7 text-base font-semibold text-slate-800 md:flex">
            <a href="/" className="hover:text-red-700">
              Home
            </a>
            <a href="/services" className="hover:text-red-700">
              Services
            </a>
            <a
              href="/about"
              className="text-red-700 border-b-2 border-red-700 pb-1"
            >
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
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold tracking-wide text-red-700 uppercase mb-3">
              Professional Fiduciary
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              A Neutral Professional for Complex Estates &amp; Receiverships
            </h1>
            <p className="text-slate-700 text-base md:text-lg mb-4">
              As a professional fiduciary, Isaiah Abeyta serves as a neutral,
              accountable decision-maker in matters involving real property,
              families, and the courts. The focus is on{" "}
              <span className="font-semibold">
                clarity, documentation, and practical progress
              </span>{" "}
              toward resolution.
            </p>
            <p className="text-slate-700 text-sm">
              Isaiah brings 16+ years of management, financial analysis, and
              project experience to each case, with a background that includes
              contract administration, strategic planning, and hands-on
              coordination with contractors, inspectors, and legal teams.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-slate-50 border-y border-slate-200">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-3">
            <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-3 text-red-700">
                Neutral &amp; Accountable
              </h2>
              <p className="text-sm text-slate-700">
                Decisions are made in the best interest of the estate, trust, or
                conservatorship, with clear records explaining why actions were
                taken and how they align with orders and duties.
              </p>
            </div>
            <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-3 text-red-700">
                Property-Focused
              </h2>
              <p className="text-sm text-slate-700">
                Many matters hinge on the condition, value, and obligations of
                real property. Isaiah brings real-estate experience, valuation
                tools, and contractor coordination to each case.
              </p>
            </div>
            <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-3 text-red-700">
                Court-Ready Documentation
              </h2>
              <p className="text-sm text-slate-700">
                From initial plans to closing reports, the goal is to create
                documentation that attorneys can easily reference, file, and use
                to support court accountings and fee petitions.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-white">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-[3fr,2fr] items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Approach to Fiduciary Work
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>
                  <span className="font-semibold">Clear expectations.</span>{" "}
                  Roles, authority, and scope are confirmed up front with the
                  court and counsel.
                </li>
                <li>
                  <span className="font-semibold">Measured communication.</span>{" "}
                  Families and beneficiaries are kept informed without
                  over-promising timelines or outcomes.
                </li>
                <li>
                  <span className="font-semibold">Documentation first.</span>{" "}
                  Progress is captured in writing so that the record reflects the
                  reasoning behind key decisions.
                </li>
                <li>
                  <span className="font-semibold">Practical decision-making.</span>{" "}
                  Recommendations are grounded in actual property condition,
                  market data, and cost/benefit analysis.
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-red-200 rounded-xl p-6 shadow-sm">
              <p className="text-xs font-semibold tracking-wide text-red-700 uppercase mb-3">
                Background Snapshot
              </p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>• MBA, California State University, Sacramento</li>
                <li>• California licensed real-estate professional</li>
                <li>• 16+ years in management &amp; operations</li>
                <li>• Experience with distressed &amp; value-add properties</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-slate-900 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Neutral Professional for an Upcoming Matter?
            </h2>
            <p className="text-slate-200 mb-8">
              Share a brief description of the case, deadlines, and any current
              orders. You&apos;ll receive a response with suggested next steps
              and potential scope of engagement.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-slate-900 px-10 py-3 rounded-md text-base font-semibold hover:bg-slate-100 transition"
            >
              Contact Isaiah
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} AI Chateaux LLC · All Rights Reserved</p>
      </footer>
    </div>
  );
}
