import Image from "next/image";
import Link from "next/link";
import { sectors } from "./data";
import {
  DropInItem,
  SlideInSection,
  StaggerContainer,
} from "@/common/MotionWrapper/MotionWrapper";

export default function WhoWeServe() {
  return (
    <SlideInSection
      direction="right"
      sctionId="who-we-serve"
      aria-labelledby="who-we-serve-heading"
      className="relative overflow-hidden bg-[#f7f8f5] py-20 text-[#123d2b] sm:py-24 lg:py-32"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full border border-[#123d2b]/6 sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#99751f] uppercase">
              <span className="h-px w-10 bg-[#d8b45a]" />
              Who We Serve
            </div>

            <h2
              id="who-we-serve-heading"
              className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Built around the needs
              <br className="hidden sm:block" /> of{" "}
              <span className="text-[#b28a32]">every sector.</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#526359] sm:text-base sm:leading-8 lg:max-w-md">
            We work with organisations across the infrastructure and built
            environment sectors, aligning our construction capabilities with
            their project objectives and operational requirements.
          </p>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
          delayChildren={0.5}
          staggerBy={0.3}
        >
          {sectors.map((sector) => (
            <DropInItem
              key={sector.number}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className=""
              direction="down"
              distance={50}
            >
              <article
                key={sector.number}
                className="group flex h-full flex-col border border-[#123d2b]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b45a]/70 hover:shadow-[0_18px_45px_rgba(18,61,43,0.10)]"
              >
                <div className="relative aspect-5/4 overflow-hidden bg-[#e3e9e2]">
                  <Image
                    src={sector.image}
                    alt={sector.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#092719]/65 via-transparent to-transparent" />

                  <span className="absolute bottom-4 left-5 text-sm font-bold tracking-[0.18em] text-white">
                    {sector.number}
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/40 bg-[#123d2b]/70 text-lg text-[#e6c775] backdrop-blur-sm transition-all duration-300 group-hover:border-[#d8b45a] group-hover:bg-[#d8b45a] group-hover:text-[#123d2b]"
                  >
                    ↗
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 h-1 w-9 bg-[#d8b45a] transition-all duration-300 group-hover:w-14" />

                  <h3 className="text-lg leading-snug font-bold sm:text-xl">
                    {sector.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#627067]">
                    {sector.description}
                  </p>

                  <Link
                    href="#contact"
                    className="mt-6 inline-flex w-fit items-center gap-3 text-sm font-bold text-[#123d2b] transition-colors hover:text-[#99751f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a]"
                  >
                    Discuss your needs
                    <span
                      aria-hidden="true"
                      className="text-[#b28a32] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </DropInItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 flex flex-col gap-5 border-t border-[#123d2b]/15 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">
              Every project starts with understanding your needs.
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#627067]">
              Tell us about your organisation and the infrastructure you need.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-4 bg-[#123d2b] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#1d563b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a]"
          >
            <span className="text-slate-200">Talk to Our Team</span>
            <span className="text-[#d8b45a]" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </SlideInSection>
  );
}
