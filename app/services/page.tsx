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
            <a href="/services" className="text-red-700">
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
        {/* Intro */}
        <section className="px-6 md:px-12 lg:px-24 py-14 md:py-16 border-b border-red-200">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-red-700 mb-3">
              Services
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">
              Fiduciary &amp; Real Estate Services for Complex Estates
            </h1>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed">
              AI Chateaux partners with attorneys, families, and courts to
              manage probate, trust, and conservatorship matters where real
              estate, beneficiaries, and compliance all intersect.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-red-50/70 border-b border-red-200">
          <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-3">
            <div className="bg-white/90 border border-red-300 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-red-700">
                Fiduciary &amp; Estates
              </h2>
              <ul className="text-sm text-slate-800 space-y-2">
                <li>• Probate &amp; trust administration</li>
                <li>• Conservatorship of estate</li>
                <li>• Beneficiary communication &amp; reporting</li>
                <li>• Court-ready accountings</li>
              </ul>
            </div>

            <div className="bg-white/90 border border-red-300 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-red-700">
                Stabilization &amp; Receivership Support
              </h2>
              <ul className="text-sm text-slate-800 space-y-2">
                <li>• Property stabilization &amp; securement</li>
                <li>• Code-enforcement &amp; city coordination</li>
                <li>• Health &amp; safety / habitability issues</li>
                <li>• 30–90 day action plans</li>
              </ul>
            </div>

            <div className="bg-white/90 border border-red-300 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-3 text-red-700">
                Real Estate Advisory
              </h2>
              <ul className="text-sm text-slate-800 space-y-2">
                <li>• BPOs, CMAs, and value scenarios</li>
                <li>• Rehab planning &amp; contractor oversight</li>
                <li>• Hold, rent, or sell recommendations</li>
                <li>• Support for court-supervised sales</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-24 py-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-800">
              Not Sure Where Your Matter Fits?
            </h2>
            <p className="text-slate-700 mb-8">
              A short email with the property address, case type, and key dates
              is enough to start. You&apos;ll receive a clear sense of whether
              AI Chateaux is a fit and what the first 30–60 days could look
              like.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-700 text-white px-10 py-3 rounded-md text-base md:text-lg font-semibold hover:bg-red-800 focus:ring-2 focus:ring-red-500 transition"
            >
              Discuss a Matter
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
