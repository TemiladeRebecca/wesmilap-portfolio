import Image from "next/image";
import Link from "next/link";
import { backgroundAssets } from "../../../../public/index";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-180 w-full flex-col justify-center overflow-hidden bg-[#123d2b] text-white sm:min-h-190 lg:min-h-205"
    >
      <div
        className="absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        <picture className="absolute inset-0 block">
          <source
            media="(max-width: 600px)"
            srcSet={backgroundAssets.portrait}
          />
          <Image
            src={backgroundAssets.landscape}
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-hero-drift object-cover object-center"
          />
        </picture>
      </div>

      <div
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#092719]/95 via-[#123d2b]/80 to-[#123d2b]/35"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-[#092719]/85 via-transparent to-[#092719]/20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.13] bg-[linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-size-[64px_64px] animate-blueprint-move"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-45 top-[8%] -z-10 hidden aspect-square w-162.5 animate-orbit-rotate rounded-full border border-[#d8b45a]/20 lg:block xl:-right-25 xl:w-195"
        aria-hidden="true"
      >
        <div className="absolute left-[16%] top-[16%] h-3 w-3 animate-pulse rounded-full bg-[#d8b45a] shadow-[0_0_24px_6px_rgba(216,180,90,0.4)]" />
        <div className="absolute bottom-[18%] right-[12%] h-2 w-2 rounded-full bg-white/80" />
      </div>

      <div
        className="pointer-events-none absolute left-0 top-0 -z-10 h-px w-full origin-left animate-scan-line bg-linear-to-r from-transparent via-[#d8b45a]/70 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="max-w-3xl animate-content-reveal">
          <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#e6c775] sm:text-xs sm:tracking-[0.28em]">
            <span className="h-px w-8 bg-[#d8b45a] sm:w-12" />
            <span>WESMILAP ENGINEERING &amp; CONSTRUCTION</span>
          </div>

          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px]"
          >
            Building
            <br />
            <span className="text-white">Infrastructure.</span>
            <br />
            Powering <span className="text-[#d8b45a]">Progress.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg">
            Engineering construction and project management solutions that
            transform your vision into lasting infrastructure. Built around your
            requirements, your schedule, and your budget.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="#services"
              className="group inline-flex min-h-14 items-center justify-center gap-4 bg-[#d8b45a] px-6 py-4 text-sm font-bold text-[#123d2b] transition duration-300 hover:bg-[#edcf7b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a] sm:px-7"
            >
              Explore Our Services
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </Link>

            <Link
              href="#contact"
              className="group inline-flex min-h-14 items-center justify-center gap-4 border border-white/50 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-[#d8b45a] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7"
            >
              Discuss a Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs text-white/75 sm:mt-10 sm:text-sm">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d8b45a]/70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#d8b45a]" />
            </span>
            <p>Nigerian owned. Engineering-led. Built for lasting impact.</p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-white/20 sm:mt-20 sm:grid-cols-3">
          {[
            "Power & Transmission",
            "Civil & Structural Works",
            "Project Management",
          ].map((highlight, index) => (
            <div
              key={highlight}
              className="group flex items-center gap-4 border-b border-white/15 py-5 transition-colors duration-300 hover:bg-white/5 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0 sm:last:pl-6 lg:gap-5 lg:py-7 lg:first:pl-0 lg:last:pl-8"
            >
              <span className="text-xs font-semibold tracking-widest text-[#d8b45a]">
                0{index + 1}
              </span>
              <span className="flex-1 text-sm font-medium text-white/90 transition-colors group-hover:text-white lg:text-base">
                {highlight}
              </span>
              <span className="text-[#d8b45a] opacity-70 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100">
                ↗
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 right-5 hidden items-center gap-3 text-[9px] font-semibold tracking-[0.25em] text-white/60 sm:flex lg:bottom-8 lg:right-10">
        <span className="h-8 w-px origin-top animate-pulse bg-[#d8b45a]" />
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}
