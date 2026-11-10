import {
  DropInItem,
  SlideInSection,
  StaggerContainer,
} from "@/common/MotionWrapper/MotionWrapper";
import { capabilities } from "../data";

export const AboutCapabilities = () => {
  return (
    <SlideInSection
      direction="right"
      className="scroll-mt-24 bg-[#f7f8f5] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
      sctionId="capabilities"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7927]">
            Our business scope
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#123c2d] sm:text-4xl lg:text-5xl">
            Capabilities across connected industries.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Our stated business objectives cover multiple areas of engineering,
            construction, and related services. The following describes these
            areas of scope, rather than a claim that every service is currently
            active on every project.
          </p>
        </div>

        <StaggerContainer className="">
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <DropInItem
                key={capability.number}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className=""
                direction="up"
                distance={100}
              >
                <article
                  key={capability.number}
                  className="group flex h-full flex-col border border-[#e1e7df] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c6a34a] hover:shadow-[0_18px_45px_rgba(15,45,32,0.07)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tabular-nums text-[#b08c36]">
                      {capability.number}
                    </span>
                    <span className="h-px w-12 bg-[#d7dfd5] transition-all group-hover:w-20 group-hover:bg-[#b99a43]" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold leading-snug text-[#173e30]">
                    {capability.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {capability.description}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2 border-t border-[#e8ece6] pt-5">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-sm bg-[#f1f5f0] px-3 py-2 text-xs font-medium text-[#315744]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </DropInItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </SlideInSection>
  );
};
