"use client";

import { useState } from "react";
import Image from "next/image";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="border-b border-red-600/60 bg-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2">
          <p className="text-slate-600">
            Serving Napa • Solano • Sonoma • Contra Costa
          </p>

          <p className="hidden text-slate-800 font-medium sm:block">
            Call: (707) 373-5915 · Email: iabeyta@aifiduciary.ai
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
          {/* Logo / Brand */}
          <a href="/" className="flex items-center gap-4">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20">
              <Image
                src="/ai-chateaux-logo.png"
                alt="AI Fiduciary Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div>
              <p className="text-2xl sm:text-4xl font-bold tracking-wide text-red-700">
                AI Fiduciary
              </p>

              <p className="text-xs sm:text-base text-slate-600">
                California Licensed Professional Fiduciary No. 1642
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden gap-7 text-base font-semibold text-slate-800 md:flex">
            <a href="/" className="hover:text-red-700">Home</a>
            <a href="/services" className="hover:text-red-700">Services</a>
            <a href="/about" className="hover:text-red-700">About</a>
            <a href="/fees" className="hover:text-red-700">Fees</a>
            <a href="/contact" className="hover:text-red-700">Contact</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden text-4xl font-bold text-black"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Dark Background */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Slide Menu */}
          <div className="absolute right-0 top-0 h-full w-[78%] max-w-sm bg-[#d8c26a] shadow-xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-0 top-0 bg-white px-5 py-3 text-4xl font-bold text-slate-800"
              aria-label="Close menu"
            >
              ×
            </button>

            <div className="flex flex-col items-center px-6 pt-20 text-center">
              {/* Mobile Logo */}
              <div className="relative mb-8 h-24 w-24">
                <Image
                  src="/ai-chateaux-logo.png"
                  alt="AI Fiduciary Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <nav className="flex flex-col gap-6 text-3xl font-medium text-black">
                <a href="/" onClick={() => setOpen(false)}>
                  Home
                </a>

                <a href="/services" onClick={() => setOpen(false)}>
                  Services
                </a>

                <a href="/about" onClick={() => setOpen(false)}>
                  About
                </a>

                <a href="/fees" onClick={() => setOpen(false)}>
                  Fees
                </a>

                <a href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </a>
              </nav>

              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-10 rounded-xl bg-black px-10 py-4 text-2xl font-semibold text-white"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}