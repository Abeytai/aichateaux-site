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
            <a href="/about" className="hover:text-red-700">
              Fiduciary
            </a>
            <a
              href="/contact"
              className="text-red-700 border-b-2 border-red-700 pb-1"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-white">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-wide text-red-700 uppercase mb-3">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              Share an Overview of Your Matter
            </h1>
            <p className="text-slate-700 text-base md:text-lg">
              Use the form below or reach out directly by phone or email. Please
              do not include confidential details—high-level information is
              sufficient for an initial review.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="px-6 md:px-12 lg:px-24 pb-16">
          <div className="mx-auto max-w-5xl grid gap-12 md:grid-cols-[3fr,2fr] items-start">
            {/* Form */}
            <div className="bg-white border border-red-200 rounded-xl p-6 shadow-sm">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="(XXX) XXX-XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Type of Matter
                  </label>
                  <select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500">
                    <option value="">Select an option</option>
                    <option>Probate / Estate</option>
                    <option>Trust Administration</option>
                    <option>Conservatorship</option>
                    <option>Receivership / Code-Enforcement</option>
                    <option>Real Estate Advisory</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1">
                    Brief Overview (no confidential details)
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Example: Estate with two properties in Solano County; one is occupied, one is vacant and needs repairs. Upcoming status hearing in 45 days."
                  />
                </div>
                <p className="text-[11px] text-slate-500">
                  Submitting this form does not create a fiduciary or
                  attorney-client relationship. Do not send confidential or
                  time-sensitive information.
                </p>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-red-700 px-6 py-2 text-sm font-semibold text-white hover:bg-red-800 transition"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Direct contact info */}
            <div className="space-y-6">
              <div className="bg-slate-50 border border-red-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-base font-semibold mb-3 text-red-700">
                  Direct Contact
                </h2>
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Phone:</span> (707) 373-5915
                  <br />
                  <span className="font-semibold">Email:</span>{" "}
                  iabeyta@aifiduciary.ai
                </p>
              </div>
              <div className="bg-slate-50 border border-red-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-base font-semibold mb-3 text-red-700">
                  For Attorneys &amp; Professionals
                </h2>
                <p className="text-sm text-slate-700 mb-2">
                  You may include case numbers, deadlines, and whether there are
                  existing orders appointing or contemplating the role of a
                  fiduciary or receiver.
                </p>
                <p className="text-[11px] text-slate-500">
                  Consultation availability can be coordinated around upcoming
                  hearings, settlement conferences, or status reports.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
  <p>
    © {new Date().getFullYear()} AI Fiduciary · Isaiah Abeyta, MBA · California Licensed Professional Fiduciary #1642 · Proud Member of PFAC, NGA, and CSSC
  </p>
</footer>
      </footer>
    </div>
  );
}
