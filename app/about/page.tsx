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
              California Licensed Professional Fiduciary
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              A Neutral Professional 
            </h1>
            <p className="text-4xl md:text-5xl font-mb-6 text-slate-900">
  <div className="space-y-8">
  <div>
    <p className="text-lg text-slate-700 leading-relaxed">
      Isaiah Abeyta serves as a neutral and accountable fiduciary in matters
      involving estates, trusts, conservatorships, and receiverships.
      The focus is on clear communication, organized documentation,
      practical coordination, and steady progress toward resolution.
    </p>
  </div>

  <div>
    <p className="text-lg text-slate-700 leading-relaxed">
      Bringing 17+ years of management, financial analysis, and project
      experience to each case, with a background that includes contract
      administration, strategic planning, and hands-on coordination with
      contractors, inspectors, attorneys, and legal teams.
    </p>
  </div>
</div>
            </p>
            <p className="text-slate-700 text-sm">
      
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
                <li>• B.S, Sonoma State Univeristy, Rohnert Park</li>
                <li>• California licensed real-estate professional</li>
                <li>• National Certifed Guardian (NGA)</li>   
                <li>• Six Sigma Black Belt (CSSC)</li>
                <li>• 17+ years in management &amp; operations</li>
                <li>• Experience with distressed &amp; value-add properties</li>
              </ul>
            </div>
          </div>
        </section>
<section className="py-14 bg-white border-t border-slate-200">
  <div className="max-w-5xl mx-auto px-6">

    <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb 1">
      Community Involvement
    </p>

    <div className="grid md:grid-cols-2 gap-5 items-center">

      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Proud Sponsor of American Canyon Little League
        </h2>

        <p className="text-slate-700 leading-relaxed mb-3">
          AI Fiduciary is proud to support American Canyon Little League as part of its commitment to community stewardship, accountability, and long-term service throughout Napa, Solano, Sonoma County.
Professional fiduciary work is built on trust, consistency, communication, and responsibility — values that extend beyond the courtroom and into the local community.        </p>

        <a
  href="https://www.amcanll.org/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3"
>
  <Image
    src="/acll-logo.png"
    alt="American Canyon Little League"
    width={300}
    height={300}
    className="object-contain"
  />

  <span className="text-red-700 font-semibold hover:underline">
    Visit American Canyon Little League
  </span>
</a>
      </div>

      <div>
        <Image
          src="/acll-photo.png"
          alt="AI Fiduciary sponsorship with American Canyon Little League"
          width={700}
          height={500}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

    </div>
  </div>
</section>
        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-neutral-700 text-white">
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
              className="inline-block bg-red-700 text-white-px-10 py-4 rounded-md text-lg font-semibold border-4-border-black hover:bg-black border hover:border bg-neutral-700 transition"
            >
              Contact Isaiah
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
  <p>
    © {new Date().getFullYear()} AI Fiduciary · Isaiah Abeyta, MBA · California Licensed Professional Fiduciary No. 1642 · Serving Napa, Solano, Sonoma & Contra Costa Counties
  </p>
</footer>
      </footer>
    </div>
  );
}
