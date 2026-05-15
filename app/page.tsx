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
            Call: (707) 373-5915 · Email: iabeyta@aifiduciary.ai
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
                AI Fiduciary
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                California Licensed Professional Fiduciary No. 1642 
          
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
  California Licensed Professional Fiduciary Services for Families, Attorneys, and Courts
              </h1>
              <p className="text-lg text-slate-700 mb-6">
                Conservatorships, trust administration, estate coordination, and complex
  property oversight throughout Napa, Solano, Sonoma, and Contra Costa Counties.
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
<section className="bg-black text-white py-4 px-6 text-center">
  <p className="text-sm md:text-base font-medium tracking-wide">
    Now Accepting Fiduciary, Conservatorship, Trust Administration, and Estate Coordination Matters Throughout Northern California
  </p>
</section>
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
<section className="py-10 px-6 md:px-12 lg:px-24 bg-slate-50 border-t border-slate-200 border-b border-slate-200">
  <div className="mx-auto max-w-4xl text-center">

    <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb-4">
      The Meaning Behind AI Fiduciary
    </p>

    <p className="text-lg text-slate-700 leading-relaxed">
      <strong>“AI”</strong> represents the initials of founder <strong>Isaiah Abeyta</strong> and reflects a commitment to accountable, organized, and practical fiduciary service throughout Napa, Solano, Sonoma, and Contra Costa Counties.
    </p>

  </div>
</section>
        {/* Key Services Summary */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 px-6 md:px-12 lg:px-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold mb-2 text-center text-slate-900">
              How AI Fiduciary Helps
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
                  Property Oversight &amp; Stabilization
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-2">
                  Coordinating property management, maintenance, vendor access, occupancy issues, documentation, and real estate-related administrative matters as part of fiduciary and estate administration services.
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
                  California real-estate experience focused on maximizing net results for estates, trusts, and receiverships.

    
    
    
                </p>
                <ul className="text-xs text-slate-600 space-y-1">
                  <li>• BPOs, valuations, and scenario analysis</li>
                  <li>• Rehab and disposition strategy</li>
                  <li>• Coordination through listing & salen</li>
             
                </ul>
              </div>
            </div>
          </div>
        </section>
<section className="py-16 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-200">
  <div className="mx-auto max-w-6xl">
    <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb-3">
      Practice Areas
    </p>
<section className="py-16 px-6 bg-white">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold text-black mb-4">
      Fiduciary Support for Attorneys & Professional Advisors
    </h2>

    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      AI Fiduciary works alongside probate, estate planning, elder law, conservatorship,
      and trust litigation counsel requiring organized fiduciary administration and
      property coordination support.
    </p>

    <div className="grid md:grid-cols-2 gap-4 text-gray-700">
      <p>• Trust administration support</p>
      <p>• Conservatorship coordination</p>
      <p>• Beneficiary communication</p>
      <p>• Property oversight</p>
      <p>• Vendor management</p>
      <p>• Asset documentation</p>
      <p>• Estate logistics</p>
      <p>• Neutral third-party administration</p>
    </div>

    <p className="text-gray-700 text-lg leading-relaxed mt-6">
      Our goal is to provide organized, professional, and transparent support while
      helping reduce administrative burden during complex fiduciary matters.
    </p>
  </div>
</section>
    <h2 className="text-3xl font-bold text-slate-900 mb-10">
      Fiduciary Support for Complex Personal, Family, and Property Matters
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          Conservatorships
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Support for court-supervised matters involving personal care, finances, property, vendors, records, and ongoing communication.
        </p>
      </div>

      <div className="border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          Trust & Estate Administration
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Organized administration support for trusts and estates, including documentation, beneficiary communication, asset coordination, and reporting.
        </p>
      </div>

      <div className="border border-slate-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          Real Property Oversight
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Practical coordination for estate, trust, conservatorship, or court-involved properties requiring valuation, vendor oversight, repair planning, or disposition support.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="py-16 px-6 md:px-12 lg:px-24 bg-slate-50 border-t border-slate-200">
  <div className="mx-auto max-w-5xl">
    <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb-3">
      Approach
    </p>

    <h2 className="text-3xl font-bold text-slate-900 mb-6">
      Organized, Documented, and Accountable Fiduciary Work
    </h2>

    <p className="text-slate-700 leading-relaxed mb-8">
      AI Fiduciary emphasizes clear communication, documented decision-making, practical coordination, and respectful interaction among attorneys, beneficiaries, families, vendors, and the court.
    </p>

    <div className="grid md:grid-cols-4 gap-6">
      <div>
        <h3 className="font-bold text-slate-900 mb-2">Clarity</h3>
        <p className="text-sm text-slate-700">Define roles, priorities, deadlines, and next steps early.</p>
      </div>

      <div>
        <h3 className="font-bold text-slate-900 mb-2">Documentation</h3>
        <p className="text-sm text-slate-700">Maintain records that support decisions, reporting, and accountability.</p>
      </div>

      <div>
        <h3 className="font-bold text-slate-900 mb-2">Coordination</h3>
        <p className="text-sm text-slate-700">Work with attorneys, vendors, inspectors, agents, and other professionals.</p>
      </div>

      <div>
        <h3 className="font-bold text-slate-900 mb-2">Stewardship</h3>
        <p className="text-sm text-slate-700">Protect assets, reduce confusion, and move matters toward resolution.</p>
      </div>
    </div>
  </div>
</section>
        {/* Bio / About Preview */}
       {/* Bio / About Preview */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
  <div className="mx-auto max-w-4xl">
    <h2 className="text-4xl font-bold text-slate-900 mb-8">
      Meet Isaiah Abeyta
    </h2>

    <div className="space-y-6 text-lg leading-relaxed text-slate-700">
      <p>
        AI Fiduciary is led by Isaiah Abeyta, MBA, NCG, a California Licensed
        Professional Fiduciary (#1642) serving Napa, Solano, Sonoma, and Contra
        Costa Counties.
      </p>

      <p>
        Isaiah focuses on organized communication, documented decision-making,
        practical coordination, and accountable oversight in matters involving
        trusts, conservatorships, estates, and complex property situations.
      </p>

      <p>
        His background includes management, financial analysis, real estate, and
        complex project coordination, with experience working alongside
        attorneys, inspectors, contractors, vendors, and financial professionals
        in time-sensitive and multi-party matters.
      </p>

      <p>
        Isaiah is a member of the Professional Fiduciary Association of
        California (PFAC) and holds the National Certified Guardian (NCG)
        designation through the National Guardianship Association (NGA), along
        with a Master of Business Administration (MBA), a B.S. in Business
        Administration, and Six Sigma Black Belt certification.
      </p>

      <p>
        The goal of AI Fiduciary is simple: provide attorneys, courts, and
        families with one calm, organized professional who can coordinate moving
        parts, document decisions clearly, and help matters move forward
        responsibly.
      </p>
    </div>

    <div className="mt-8">
      <a
        href="/about"
        className="inline-block text-red-700 font-semibold hover:text-red-800"
      >
        Learn More →
      </a>
    </div>
  </div>
</section>
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold tracking-widest text-red-700 uppercase mb-10">
            Professional Memberships & Certifications
          </p>

          <div className="grid md:grid-cols-3 gap-20 items-start justify-items-center">
            <div className="text-center max-w-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                PFAC Member
              </h3>

              <a href="https://pfac-pro.org" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/pfac-logo.png"
                  alt="PFAC Member"
                  width={220}
                  height={140}
                  className="object-contain mx-auto"
                />
              </a>

              <p className="mt-6 text-base text-slate-700 leading-relaxed">
                Professional Fiduciary Association of California
              </p>
            </div>

            <div className="text-center max-w-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                National Certified Guardian
              </h3>

              <a href="https://guardianship.org" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/nga-logo.png"
                  alt="National Guardianship Association"
                  width={220}
                  height={140}
                  className="object-contain mx-auto"
                />
              </a>

              <p className="mt-6 text-base text-slate-700 leading-relaxed">
                National Guardianship Association
              </p>
            </div>

            <div className="text-center max-w-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Six Sigma Black Belt
              </h3>

              <a
                href="https://www.sixsigmacouncil.org/six-sigma-black-belt-certification/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/cssc-logo.png"
                  alt="Six Sigma Black Belt"
                  width={190}
                  height={140}
                  className="object-contain mx-auto"
                />
              </a>

              <p className="mt-6 text-base text-slate-700 leading-relaxed">
                Council for Six Sigma Certification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-700 text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Discuss a Fiduciary, Estate, or Property Matter
          </h2>
          <p className="text-slate-200 mb-8">
            Share a brief overview of the matter—estate, receivership, or
            distressed property—and we&apos;ll respond with practical next steps
            and timelines.
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-700 text-white-px-10 py-4 rounded-md text-lg font-semibold border-4-border-black hover:bg-black border hover:border bg-neutral-700 transition"
          >
            Contact AI Fiduciary
          </a>
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
      <p>
        © {new Date().getFullYear()} AI Fiduciary · Isaiah Abeyta, MBA · California Licensed Professional Fiduciary No. 1642 · Serving Napa, Solano, Sonoma & Contra Costa Counties
      </p>
    </footer>
  </div>
);
}