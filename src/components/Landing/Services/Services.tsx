import Image from "next/image";
import Link from "next/link";
import { services } from "./data";
import {
  DropInItem,
  SlideInSection,
  StaggerContainer,
} from "@/common/MotionWrapper/MotionWrapper";

export default function Services() {
  return (
    <SlideInSection
      direction="right"
      sctionId="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#f7f8f5] py-20 text-[#173b2b] sm:py-24 lg:py-32"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#123d2b]/6 sm:h-112 sm:w-md"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-32 h-64 w-64 rounded-full border border-[#123d2b]/6 sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#99751f] uppercase">
              <span className="h-px w-9 bg-[#d8b45a]" />
              What We Do
            </div>

            <h2
              id="services-heading"
              className="max-w-2xl text-3xl leading-tight font-extrabold tracking-tight text-[#123d2b] sm:text-4xl lg:text-5xl"
            >
              Engineering solutions.
              <br />
              <span className="text-[#b28a32]">Built to last.</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-sm leading-7 text-[#526359] sm:text-base sm:leading-8">
              From power infrastructure to buildings and roads, WESMILAP
              delivers engineering construction and project management solutions
              shaped around each client&apos;s needs.
            </p>
          </div>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:gap-8"
          delayChildren={0.5}
          staggerBy={0.3}
        >
          {services.map((service) => (
            <DropInItem
              key={service.number}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className=""
              direction="down"
              distance={50}
            >
              <article
                key={service.number}
                className="group flex h-full flex-col overflow-hidden border border-[#123d2b]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b45a]/70 hover:shadow-[0_20px_55px_rgba(18,61,43,0.10)]"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-[#e3e9e2] sm:aspect-video">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 600px"
                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${service.imagePosition}`}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#092719]/70 via-transparent to-[#092719]/10" />

                  <span className="absolute left-5 top-5 border border-white/40 bg-[#123d2b]/85 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-sm sm:left-6 sm:top-6">
                    {service.category}
                  </span>

                  <span className="absolute bottom-4 right-5 text-5xl font-extrabold tracking-tighter text-white/80 sm:bottom-5 sm:right-6 sm:text-6xl">
                    {service.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                  <div className="mb-4 h-1 w-10 bg-[#d8b45a] transition-all duration-300 group-hover:w-16" />

                  <h3 className="max-w-md text-xl leading-snug font-bold text-[#123d2b] sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#627067] sm:text-base">
                    {service.description}
                  </p>

                  <Link
                    href="#contact"
                    className="mt-6 inline-flex w-fit items-center gap-3 text-sm font-bold text-[#123d2b] transition-colors hover:text-[#99751f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a]"
                  >
                    Discuss this service
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

        <div className="mt-12 flex flex-col gap-6 border-t border-[#123d2b]/15 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#123d2b] sm:text-2xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#627067]">
              Let&apos;s discuss your requirements and how we can help.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex min-h-12 w-fit items-center justify-center gap-4 bg-[#123d2b] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#1d563b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a]"
          >
            <span className="text-slate-100"> Start a Conversation</span>
            <span className="text-[#d8b45a]" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </SlideInSection>
  );
}
