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
      <header className="border-b border-red-200 bg-white/95 backdrop-blur shadow-sm">
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
              <p className="text-sm sm:text-base text-slate-700">
                Professional Fiduciary &amp; Estate Services
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden gap-7 text-base font-bold text-slate-900 md:flex">
            <a href="/" className="hover:text-red-700">
              Home
            </a>
            <a href="/services" className="hover:text-red-700">
              Services
            </a>
            <a href="/about" className="text-red-700">
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
        <section className="px-6 md:px-12 lg:px-24 py-14 md:py-16 border-b border-red-200">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-red-700 mb-3">
              Fiduciary Profile
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">
              A Fiduciary Practice Built Around Real Estate, Documentation, and
              Court-Ready Systems
            </h1>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
              As a future California Licensed Professional Fiduciary (CLPF) with{" "}
              <span className="font-semibold">16+ years of operations and
              management experience</span>, Isaiah Abeyta approaches each
              appointment with an asset-manager mindset and a fiduciary
              standard of care.
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              The practice is designed for matters where{" "}
              <span className="font-semibold">
                probate, trusts, conservatorships, and real-estate–heavy
                estates
              </span>{" "}
              intersect — especially distressed or code-enforcement properties,
              multi-heir situations, and cases that require disciplined
              documentation for the Court.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-red-50/70 border-b border-red-200">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-[3fr,2fr] items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">
                Fiduciary Philosophy
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4">
                Every matter is governed by four principles:{" "}
                <span className="font-semibold">
                  loyalty, prudence, transparency, and disciplined protection
                  of the person or estate
                </span>
                . Decisions are evidence-based, documented, and aligned with
                California Probate Code and PFAC best practices.
              </p>
              <ul className="text-sm text-slate-800 space-y-2 mb-4">
                <li>• Protect the individual and the estate first.</li>
                <li>• Document every material decision in plain language.</li>
                <li>• Maintain clear, respectful communication with counsel,
                  courts, and families.</li>
                <li>• Treat each case like an institutional engagement, not an
                  ad hoc favor.</li>
              </ul>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                The result is a{" "}
                <span className="font-semibold text-red-700">
                  low-drama, high-structure approach
                </span>{" "}
                that gives attorneys and beneficiaries confidence the file is
                being handled with care.
              </p>
            </div>

            <div className="bg-white/90 border border-red-300 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-red-700">
                Core Fiduciary Values
              </h3>
              <ul className="text-sm text-slate-800 space-y-2">
                <li>• Neutral, conflict-aware decision-making</li>
                <li>• Court-ready reporting and documentation</li>
                <li>• Real estate fluency for illiquid assets</li>
                <li>• Financial modeling and risk analysis</li>
                <li>• Consistent monitoring and follow-through</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Background & Qualifications */}
        <section className="px-6 md:px-12 lg:px-24 py-14 border-b border-red-200">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">
                Background &amp; Training
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-4">
                Isaiah&apos;s background combines{" "}
                <span className="font-semibold">
                  operations, compliance, and real estate
                </span>{" "}
                in a way that is unusual among fiduciaries.
              </p>
              <ul className="text-sm text-slate-800 space-y-2">
                <li>• MBA – California State University, Sacramento (4.0 GPA)</li>
                <li>• B.S. Business Administration – Sonoma State University</li>
                <li>• Six Sigma Black Belt – process, RCA, and CAPA discipline</li>
                <li>• 16+ years in leadership, vendor oversight, and documentation-heavy roles</li>
                <li>• Licensed California real estate professional focused on REO and distressed assets</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-800">
                Real Estate &amp; Distressed Property Expertise
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-3">
                A significant portion of Isaiah&apos;s work involves{" "}
                <span className="font-semibold">
                  hoarder homes, code-enforcement properties, REO-style assets,
                  and multi-heir real estate
                </span>
                . This is the #1 pain point in most estates and
                conservatorships.
              </p>
              <ul className="text-sm text-slate-800 space-y-2">
                <li>• BPO/CMA valuation and scenario analysis</li>
                <li>• Property stabilization, securement, and safety review</li>
                <li>• Coordination with contractors, inspectors, and cities</li>
                <li>• Hold / sell / rent / rehab decision modeling</li>
                <li>• Court-confirmation and receivership-style workflows</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What makes this practice different */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-red-50/70 border-b border-red-200">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">
              What Makes This Fiduciary Practice Different
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
              Most fiduciaries come from social work or purely administrative
              backgrounds. Isaiah&apos;s practice is built instead around{" "}
              <span className="font-semibold">
                financial modeling, real estate, and operational systems
              </span>
              .
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white/90 border border-red-300 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-red-700">
                  Financial &amp; Analytical
                </h3>
                <ul className="text-sm text-slate-800 space-y-2">
                  <li>• MBA-level cashflow and risk analysis</li>
                  <li>• Investment and real estate scenario modeling</li>
                  <li>• Structured IPS-style decision framework</li>
                  <li>• Clear, court-friendly explanation of choices</li>
                </ul>
              </div>

              <div className="bg-white/90 border border-red-300 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-red-700">
                  Real Estate &amp; Operations
                </h3>
                <ul className="text-sm text-slate-800 space-y-2">
                  <li>• REO / receivership mindset for illiquid assets</li>
                  <li>• Vendor and contractor oversight across counties</li>
                  <li>• Code-enforcement and city coordination</li>
                  <li>• Practical timelines for clean-up and sale</li>
                </ul>
              </div>

              <div className="bg-white/90 border border-red-300 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-red-700">
                  Systems &amp; Documentation
                </h3>
                <ul className="text-sm text-slate-800 space-y-2">
                  <li>• Monthly and quarterly monitoring checklists</li>
                  <li>• Written workflows for distressed property cases</li>
                  <li>• Court-ready summary templates</li>
                  <li>• Evidence trail that supports fee petitions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Three-pillars section */}
        <section className="px-6 md:px-12 lg:px-24 py-14 border-b border-red-200">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">
              How Fiduciary Work Fits Into a Larger Ecosystem
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6">
              AI Chateaux is one part of a broader professional ecosystem built
              around three pillars:{" "}
              <span className="font-semibold">
                fiduciary services, real estate operations, and future private
                capital vehicles
              </span>
              . Each reinforces the others.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-red-700">
                  Pillar 1 — AI Fiduciary
                </h3>
                <p className="text-sm text-slate-800">
                  Court-appointed fiduciary roles: trustee, conservator,
                  administrator, and special administrator. Built on prudence,
                  compliance, documentation, and financial stewardship.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-red-700">
                  Pillar 2 — AI Chateaux
                </h3>
                <p className="text-sm text-slate-800">
                  Real estate operations for REO, distressed assets, BPOs,
                  receivership support, and tenant / code issues — the practical
                  engine that resolves property problems.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-red-700">
                  Pillar 3 — Future Capital
                </h3>
                <p className="text-sm text-slate-800">
                  Long-term plan for a credit fund or syndication platform
                  focused on distressed and value-add real estate, built on the
                  same fiduciary-level reporting and controls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-slate-900 text-white">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need a Fiduciary for a Real-Estate–Heavy Case?
            </h2>
            <p className="text-slate-200 mb-8">
              If you&apos;re evaluating a potential appointment or considering
              a referral, a brief email with the case type, property profile,
              and key dates is enough to start a conversation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white px-10 py-3 rounded-md text-base md:text-lg font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-500 transition"
            >
              Contact Isaiah About a Case
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-200 bg-white py-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} AI Chateaux LLC · All Rights Reserved</p>
      </footer>
    </div>
  );
}
