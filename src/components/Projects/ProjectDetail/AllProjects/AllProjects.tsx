import Link from "next/link";
import { IProject } from "../../interface";
import {
  DropInItem,
  SlideInSection,
  StaggerContainer,
} from "@/common/MotionWrapper/MotionWrapper";

export const AllProjects = ({
  project,
  photoCount,
  videoCount,
}: {
  project: IProject;
  photoCount: number;
  videoCount: number;
}) => {
  return (
    <SlideInSection
      direction="right"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative isolate overflow-hidden bg-[#0b2c1d] py-16 text-white sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[56px_56px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 text-sm font-semibold text-[#e6c775] transition-colors hover:text-white"
        >
          <span aria-hidden="true">←</span>
          All Projects
        </Link>

        <div className="mt-10 max-w-4xl sm:mt-14">
          <p className="text-xs font-bold tracking-[0.22em] text-[#e6c775] uppercase">
            {project.category}
          </p>

          <h1 className="mt-4 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
            {project.summary}
          </p>
        </div>
        <StaggerContainer
          className="mt-10 grid grid-cols-2 gap-6 border-t border-white/15 pt-6 sm:grid-cols-4 sm:gap-8"
          delayChildren={0.5}
          staggerBy={0.3}
        >
          <DropInItem
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className=""
            direction="down"
            distance={80}
          >
            <p className="text-xs text-white/50">Client</p>
            <p className="mt-2 text-sm font-semibold">{project.client}</p>
          </DropInItem>

          <DropInItem
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className=""
            direction="down"
            distance={80}
          >
            <p className="text-xs text-white/50">Location</p>
            <p className="mt-2 text-sm font-semibold">{project.location}</p>
          </DropInItem>

          <DropInItem
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className=""
            direction="down"
            distance={80}
          >
            <p className="text-xs text-white/50">Project year</p>
            <p className="mt-2 text-sm font-semibold">{project.year}</p>
          </DropInItem>

          <DropInItem
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className=""
            direction="down"
            distance={80}
          >
            <p className="text-xs text-white/50">Project media</p>
            <p className="mt-2 text-sm font-semibold">
              {photoCount} photos · {videoCount} videos
            </p>
          </DropInItem>
        </StaggerContainer>
      </div>
    </SlideInSection>
  );
};
