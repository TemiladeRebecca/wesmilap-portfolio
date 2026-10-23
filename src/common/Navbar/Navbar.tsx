"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { LogoAssets } from "../../../public/index";
import { usePathname } from "next/navigation";
import { navLinks } from "./data";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b2c1d]/95 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-19 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-22 lg:px-12"
        >
          <Link
            href="/#home"
            aria-label="WESMILAP home"
            onClick={closeMenu}
            className="relative z-10 flex shrink-0 items-center gap-3"
          >
            <Image
              src={LogoAssets.colorLogo}
              alt="WESMILAP logo"
              width={170}
              height={58}
              priority
              className="h-auto max-h-12 w-auto max-w-36.25 object-contain sm:max-w-42.5 lg:max-h-14"
            />
          </Link>

          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative py-3 text-sm font-medium transition-colors duration-200 hover:text-[#e6c775] ${pathname === link.href ? "text-[#d8b45a] text-xl" : "text-white/80 "}`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 bottom-1 h-0.5 origin-left scale-x-0 bg-[#d8b45a] transition-transform duration-300 group-hover:scale-x-100 `}
                />
              </Link>
            ))}

            {pathname !== "/contact" && (
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#d8b45a] px-5 text-sm font-bold text-[#123d2b] transition-colors duration-200 hover:bg-[#edcf7b]"
              >
                Get in Touch
                <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>

          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-10 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded border border-white/15 transition-colors hover:border-[#d8b45a]/70 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a] lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-[#d8b45a] transition-transform duration-300 ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#d8b45a] transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>

        <div
          id="mobile-navigation"
          aria-hidden={!menuOpen}
          className={`overflow-hidden border-t border-white/10 bg-[#0b2c1d] transition-[max-height,opacity,visibility] duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "visible max-h-120 opacity-100"
              : "invisible max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 pb-5 pt-3 sm:px-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen ? `${index * 35}ms` : "0ms",
                }}
                className={`flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium transition-all duration-200 hover:pl-2 hover:text-[#e6c775] ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-2 opacity-0"
                }`}
              >
                {link.label}
                <span className="text-[#d8b45a]" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}

            {pathname !== "/contact" && (
              <Link
                href="/contact"
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className="mt-5 flex min-h-12 items-center justify-center gap-2 bg-[#d8b45a] px-5 text-sm font-bold text-[#123d2b] transition-colors hover:bg-[#edcf7b]"
              >
                Get in Touch
                <span aria-hidden="true">↗</span>
              </Link>
            )}
          </div>
        </div>
      </header>

      <div aria-hidden="true" className="h-19 lg:h-22" />
    </>
  );
}
