import Image from "next/image";
import { whatWeDoAssets } from "../../../../public/index";
import { values } from "../data";
import { SlideInSection } from "@/common/MotionWrapper/MotionWrapper";

export const AboutOurCommitments = () => {
  return (
    <SlideInSection
      direction="left"
      className="relative isolate overflow-hidden bg-[#0b2b20] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Image
        src={whatWeDoAssets.projectManagementImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-[#0b2b20]/95 via-[#0b2b20]/85 to-[#0b2b20]/45"
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e0bf61]">
              Our commitments
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Principles that shape our work.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65 sm:text-base">
              Our proposed values reflect the standards we believe should guide
              professional relationships and project delivery. They are intended
              as a starting point for your approval.
            </p>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.number}
                className="border-t border-white/20 py-6"
              >
                <p className="text-xs font-bold text-[#e0bf61]">
                  {value.number}
                </p>

                <h3 className="mt-3 text-xl font-bold">{value.title}</h3>

                <p className="mt-3 text-sm leading-7 text-white/80">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SlideInSection>
  );
};
