"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Fees", href: "/fees" },
  { name: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
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

      <header className="border-b border-slate-200 bg-white/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
          <div className="flex items-center gap-5">
            <div className="relative h-20 w-20">
              <Image
                src="/ai-chateaux-logo.png"
                alt="AI Fiduciary Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div>
              <p className="text-3xl sm:text-4xl font-bold tracking-wide text-red-700">
                AI Fiduciary
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                California Licensed Professional Fiduciary No. 1642
              </p>
            </div>
          </div>

          <nav className="hidden gap-7 text-base font-semibold text-slate-800 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? "text-red-700 border-b-2 border-red-700 pb-1"
                      : "hover:text-red-700"
                  }
                >
                  {item.name}
                </a>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}