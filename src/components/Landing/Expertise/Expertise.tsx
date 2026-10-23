import Image from "next/image";
import Link from "next/link";
import { backgroundAssets } from "../../../../public/index";
import { expertiseAreas } from "./data";
import {
  DropInItem,
  SlideInSection,
  StaggerContainer,
} from "@/common/MotionWrapper/MotionWrapper";

export default function Expertise() {
  return (
    <SlideInSection
      direction="left"
      sctionId="expertise"
      aria-labelledby="expertise-heading"
      className="relative isolate overflow-hidden bg-[#0b2c1d] py-20 text-white sm:py-24 lg:py-32"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[56px_56px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-125 w-125 rounded-full border border-[#d8b45a]/10 sm:h-162.5 sm:w-162.5"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-3xl sm:mb-16 lg:mb-20">
          <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.24em] text-[#e6c775] uppercase">
            <span className="h-px w-10 bg-[#d8b45a]" />
            Our Expertise
          </div>

          <h2
            id="expertise-heading"
            className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-6xl"
          >
            Technical capability.
            <br />
            <span className="text-[#d8b45a]">Practical execution.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            WESMILAP brings engineering knowledge, construction experience and
            project coordination together to address infrastructure and building
            requirements with a focus on quality, accountability and lasting
            value.
          </p>
        </div>

        <div className="grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          <div className="relative min-h-85 overflow-hidden bg-[#173f2c] sm:min-h-115 lg:min-h-155">
            <Image
              src={backgroundAssets.portrait}
              alt="Engineering professionals working on an infrastructure project"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#092719]/95 via-[#092719]/10 to-[#092719]/10" />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 border border-white/20 sm:inset-6"
            />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <span className="mb-4 inline-block h-1 w-12 bg-[#d8b45a]" />

              <p className="max-w-md text-2xl leading-snug font-bold sm:text-3xl">
                Engineering with purpose. Construction with precision.
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                Focused on meeting project requirements and delivering
                infrastructure built for long-term use.
              </p>
            </div>

            <span
              aria-hidden="true"
              className="absolute right-8 top-8 text-6xl font-black tracking-tighter text-white/20 sm:text-7xl"
            >
              W.
            </span>
          </div>

          <StaggerContainer
            className="flex flex-col"
            delayChildren={0.5}
            staggerBy={0.3}
          >
            {expertiseAreas.map((area) => (
              <DropInItem
                key={area.number}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className=""
                direction="up"
                distance={50}
              >
                <article
                  key={area.number}
                  className="group border-b border-white/15 py-6 first:border-t sm:py-7 lg:py-8"
                >
                  <div className="flex gap-4 sm:gap-6">
                    <span className="pt-1 text-xs font-bold tracking-widest text-[#d8b45a] sm:text-sm">
                      {area.number}
                    </span>

                    <div className="flex-1">
                      <h3 className="text-lg leading-snug font-bold transition-colors duration-300 group-hover:text-[#e6c775] sm:text-xl lg:text-2xl">
                        {area.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                        {area.description}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="mt-1 text-lg text-[#d8b45a] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      ↗
                    </span>
                  </div>
                </article>
              </DropInItem>
            ))}

            <div className="mt-8 sm:mt-10">
              <Link
                href="#contact"
                className="group inline-flex min-h-14 items-center justify-center gap-5 bg-[#d8b45a] px-6 py-4 text-sm font-bold text-[#123d2b] transition-colors duration-300 hover:bg-[#edcf7b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a] sm:px-8"
              >
                Discuss Your Project
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </StaggerContainer>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-white/80">
            Built around your requirements, schedule and budget.
          </p>

          <span className="text-xs font-semibold tracking-[0.18em] text-[#d8b45a] uppercase">
            WESMILAP International Limited
          </span>
        </div>
      </div>
    </SlideInSection>
  );
}
