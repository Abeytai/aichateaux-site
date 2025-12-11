// app/contact/page.tsx
import Image from "next/image";

export default function ContactPage() {
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
            <a href="/about" className="hover:text-red-700">
              Fiduciary
            </a>
            <a href="/contact" className="text-red-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Intro */}
        <section className="px-6 md:px-12 lg:px-24 py-14 md:py-16 border-b border-red-200">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-red-700 mb-3">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">
              Start a Conversation About a Case or Property
            </h1>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
              The easiest way to begin is with a brief overview of the matter:
              case type, property address, and any key dates or immediate
              concerns. You do not need to have every detail sorted out before
              reaching out.
            </p>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed">
              AI Chateaux typically responds within one business day with
              next-step options, clarity on fit, and what the first 30–60 days
              could look like if we move forward.
            </p>
          </div>
        </section>

        {/* Contact details + form */}
        <section className="px-6 md:px-12 lg:px-24 py-14 bg-red-50/70 border-b border-red-200">
          <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-[2fr,3fr] items-start">
            {/* Direct contact panel */}
            <div className="bg-white/90 border border-red-300 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-800">
                Direct Contact
              </h2>
              <div className="space-y-3 text-sm text-slate-800">
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a
                    href="tel:+17073735915"
                    className="text-red-700 hover:text-red-800"
                  >
                    (707) 373-5915
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:iabeyta@aifiduciary.ai"
                    className="text-red-700 hover:text-red-800"
                  >
                    iabeyta@aifiduciary.ai
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Primary Counties:</span>{" "}
                  Solano, Napa, Sonoma, Contra Costa
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-2 text-red-700">
                  Helpful to include:
                </h3>
                <ul className="text-xs text-slate-800 space-y-1">
                  <li>• Case type (probate, trust, conservatorship, etc.)</li>
                  <li>• Property address(es) and basic condition</li>
                  <li>• Any code-enforcement, safety, or vacancy issues</li>
                  <li>• Important dates (hearings, deadlines, expirations)</li>
                  <li>• Your role (attorney, family member, court, other)</li>
                </ul>
              </div>
            </div>

            {/* Simple contact form (front-end only) */}
            <div className="bg-white/90 border border-red-300 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-red-800">
                Send a Case Overview
              </h2>
              <p className="text-sm text-slate-800 mb-4">
                This form is a guide for what to send to the email above. Please
                avoid including sensitive personal identifiers (like full SSNs)
                in your initial message.
              </p>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-900 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md border border-red-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-slate-900 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-red-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-slate-900 mb-1"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-md border border-red-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="(000) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-semibold text-slate-900 mb-1"
                  >
                    Your Role
                  </label>
                  <select
                    id="role"
                    className="w-full rounded-md border border-red-200 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="attorney">Attorney</option>
                    <option value="family">Family Member / Heir</option>
                    <option value="court">Court / Public Agency</option>
                    <option value="professional">
                      Professional (realtor, advisor, etc.)
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="caseType"
                    className="block text-sm font-semibold text-slate-900 mb-1"
                  >
                    Case Type
                  </label>
                  <input
                    id="caseType"
                    type="text"
                    className="w-full rounded-md border border-red-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Probate, trust, conservatorship, receivership, etc."
                  />
                </div>

                <div>
                  <label
                    htmlFor="properties"
                    className="block text-sm font-semibold text-slate-900 mb-1"
                  >
                    Property Address(es)
                  </label>
                  <textarea
                    id="properties"
                    className="w-full rounded-md border border-red-200 px-3 py-2 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Include city and any key notes (vacant, tenant occupied, hoarder, code issues, etc.)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-900 mb-1"
                  >
                    Brief Overview / Questions
                  </label>
                  <textarea
                    id="message"
                    className="w-full rounded-md border border-red-200 px-3 py-2 text-sm h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Share a short overview of the matter and what you’d like help with."
                  />
                </div>

                {/* Note: this button is front-end only for now */}
                <button
                  type="button"
                  className="w-full md:w-auto bg-red-700 text-white px-8 py-2.5 rounded-md text-sm font-semibold hover:bg-red-800 focus:ring-2 focus:ring-red-500 transition"
                >
                  Prepare Email Draft
                </button>
                <p className="text-xs text-slate-600 mt-2">
                  Submitting this form does not create a fiduciary, attorney,
                  or client relationship. Please do not send confidential
                  information until we&apos;ve confirmed engagement.
                </p>
              </form>
            </div>
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
