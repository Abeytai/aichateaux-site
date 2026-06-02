// components/SiteFooter.tsx

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white mt-auto">
      {/* Main Footer */}
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-4 mb-4">

            <img
              src="/ai-chateaux-logo.png"
              alt="AI Fiduciary Logo"
              className="h-16 w-16 object-contain"
            />

            <div>
              <h3 className="text-2xl font-bold text-red-600">
                AI Fiduciary
              </h3>

              <p className="text-sm text-slate-400">
                California Licensed Professional Fiduciary No. 1642
              </p>
            </div>
          </div>

          <p className="text-slate-300 leading-7 text-sm">
            California Licensed Professional Fiduciary providing trust
            administration, conservatorship support, estate coordination,
            and complex property oversight throughout Northern California.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-4 uppercase tracking-wide text-sm">
            Navigation
          </h4>

          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <a href="/" className="hover:text-red-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="/services" className="hover:text-red-500 transition">
                Services
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-red-500 transition">
                About
              </a>
            </li>

            <li>
              <a href="/fees" className="hover:text-red-500 transition">
                Fees
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-4 uppercase tracking-wide text-sm">
            Services
          </h4>

          <ul className="space-y-2 text-slate-300 text-sm">
            <li>
              <a href="/services" className="hover:text-red-500 transition">
                Trust Administration
              </a>
            </li>

            <li>
              <a href="/services" className="hover:text-red-500 transition">
                Conservatorships
              </a>
            </li>

            <li>
              <a href="/services" className="hover:text-red-500 transition">
                Estate Coordination
              </a>
            </li>

            <li>
              <a href="/services" className="hover:text-red-500 transition">
                Property Oversight
              </a>
            </li>

            <li>
              <a href="/services" className="hover:text-red-500 transition">
                Fiduciary Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4 uppercase tracking-wide text-sm">
            Contact
          </h4>

          <div className="space-y-3 text-slate-300 text-sm">
            <p>(707) 373-5915</p>

            <p>iabeyta@aifiduciary.ai</p>

            <p>
              Serving Napa, Solano,
              Sonoma, Contra Costa,
              and Northern California
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>
            © 2026 AI Fiduciary. All Rights Reserved.
          </p>

          <p>
            California Licensed Professional Fiduciary No. 1642
          </p>
        </div>
      </div>
    </footer>
  );
}