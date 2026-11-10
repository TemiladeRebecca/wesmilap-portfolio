"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { projects } from "./data";
import ProjectCard from "./ProjectCard/ProjectCard";
import { shuffleProjects } from "./helpers";
import {
  DropInItem,
  SlideInSection,
  StaggerContainer,
} from "@/common/MotionWrapper/MotionWrapper";

const FEATURED_PROJECT_COUNT = 3;

export default function Projects() {
  const [featuredProjects, setFeaturedProjects] = useState(() =>
    projects.slice(0, FEATURED_PROJECT_COUNT),
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFeaturedProjects(
      shuffleProjects(projects).slice(0, FEATURED_PROJECT_COUNT),
    );
  }, []);

  return (
    <SlideInSection
      direction="right"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
      sctionId="projects"
      aria-labelledby="projects-heading"
      className="relative overflow-hidden bg-[#0b2c1d] py-20 text-white sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[56px_56px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-[#e6c775] uppercase">
              <span className="h-px w-10 bg-[#d8b45a]" />
              Projects &amp; Experience
            </div>

            <h2
              id="projects-heading"
              className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
            >
              From the first step
              <br />
              <span className="text-[#d8b45a]">to the finished project.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Explore project stories, construction stages and the challenges
              each project is designed to address.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-4 border border-[#d8b45a]/70 px-5 py-3 text-sm font-bold text-[#e6c775] transition-colors hover:bg-[#d8b45a] hover:text-[#123d2b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45a]"
          >
            Explore All Projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
          delayChildren={0.5}
          staggerBy={0.3}
        >
          {featuredProjects.map((project) => (
            <DropInItem
              key={project.slug}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className=""
              direction="up"
              distance={50}
            >
              <ProjectCard key={project.slug} project={project} />
            </DropInItem>
          ))}
        </StaggerContainer>

        <p className="mt-8 text-xs leading-6 text-white/45">
          Project information and media should be verified before publication.
        </p>
      </div>
    </SlideInSection>
  );
}
