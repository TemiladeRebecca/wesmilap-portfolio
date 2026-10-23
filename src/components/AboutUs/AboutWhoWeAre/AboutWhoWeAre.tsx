import { SlideInSection } from "@/common/MotionWrapper/MotionWrapper";
import Link from "next/link";

export const AboutWhoWeAre = () => {
  return (
    <SlideInSection
      direction="left"
      className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7927]">
            Who we are
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#123c2d] sm:text-4xl lg:text-5xl">
            A business built around engineering and construction.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
            <p>
              WESMILAP International Limited was registered on 12 March 2021.
              Its principal business activity is civil engineering and building,
              supported by a broader set of business objectives spanning
              construction, engineering, infrastructure, and related commercial
              activities.
            </p>

            <p>
              The company&apos;s stated scope includes property and building
              works, civil and structural engineering, construction consultancy,
              power-related infrastructure, telecommunications services, oil and
              gas exploration support, procurement, and other associated
              services.
            </p>

            <p>
              We aim to approach each engagement with an understanding of the
              client&apos;s requirements, the technical demands of the work, and
              the importance of planning, coordination, and responsible
              execution.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-[#174b36] transition hover:text-[#9b7927]"
          >
            Start a conversation
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="relative">
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-[#c6a34a] sm:-left-5 sm:-top-5" />

          <div className="relative overflow-hidden rounded-sm bg-[#123c2d] p-7 text-white sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e0bf61]">
                Our foundation
              </span>

              <h3 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
                Practical thinking. Responsible execution. Lasting value.
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
                We recognise that successful projects depend on more than
                construction alone. Clear requirements, sound planning,
                coordination, safety awareness, and accountability all
                contribute to effective delivery.
              </p>

              <div className="mt-9 border-t border-white/15 pt-6">
                <p className="text-sm font-semibold text-white">
                  WESMILAP International Limited
                </p>
                <p className="mt-1 text-sm text-white/60">
                  Civil Engineering & Building
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-2 border-r-2 border-[#c6a34a] sm:-bottom-5 sm:-right-5" />
        </div>
      </div>
    </SlideInSection>
  );
};
