import Link from "next/link";
import { quickLinks, serviceLinks } from "./data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0b241b] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-[#c6a34a]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="border-b border-white/15 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8bb68]">
                Have a project in mind?
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Let&apos;s discuss what you&apos;re building.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Tell us about your engineering, construction, infrastructure, or
                project management requirements.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit shrink-0 items-center justify-center gap-3 rounded-md bg-[#d3b15b] px-6 py-4 text-sm font-bold text-[#102d21] transition duration-300 hover:bg-[#e4c875] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b241b]"
            >
              Discuss Your Project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-16 lg:py-16">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-sm text-xl font-bold tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3b15b]"
            >
              WESMILAP
              <span className="ml-2 text-[#d3b15b]">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              WESMILAP International Limited — engineering, construction,
              infrastructure, and project management solutions.
            </p>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-[#d3b15b]">
              Building Infrastructure. Powering Progress.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-[#e3c66f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3b15b]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-[#e3c66f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d3b15b]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#e3c66f] transition-colors hover:text-white"
            >
              Contact our team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} WESMILAP International Limited. All rights reserved.
          </p>

          <Link
            href="/contact"
            className="w-fit transition-colors hover:text-[#e3c66f]"
          >
            Contact WESMILAP
          </Link>
        </div>
      </div>
    </footer>
  );
}
