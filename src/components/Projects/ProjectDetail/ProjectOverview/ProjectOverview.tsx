import { SlideInSection } from "@/common/MotionWrapper/MotionWrapper";
import { IProject } from "../../interface";

export const ProjectOverview = ({ project }: { project: IProject }) => {
  return (
    <SlideInSection
      direction="right"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-12"
    >
      <div>
        <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-[#99751f] uppercase">
          <span className="h-px w-8 bg-[#d8b45a]" />
          Project Overview
        </p>

        <h2 className="mt-5 text-3xl leading-tight font-extrabold sm:text-4xl">
          The challenge.
          <br />
          <span className="text-[#b28a32]">The response.</span>
        </h2>
      </div>

      <div className="space-y-8">
        <article className="border-b border-[#123d2b]/10 pb-7">
          <h3 className="text-lg font-bold">The Challenge</h3>
          <p className="mt-3 text-sm leading-7 text-[#627067] sm:text-base">
            {project.challenge}
          </p>
        </article>

        <article className="border-b border-[#123d2b]/10 pb-7">
          <h3 className="text-lg font-bold">Our Approach</h3>
          <p className="mt-3 text-sm leading-7 text-[#627067] sm:text-base">
            {project.solution}
          </p>
        </article>

        <article>
          <h3 className="text-lg font-bold">Outcome &amp; Impact</h3>
          <p className="mt-3 text-sm leading-7 text-[#627067] sm:text-base">
            {project.outcome}
          </p>
        </article>
      </div>
    </SlideInSection>
  );
};
