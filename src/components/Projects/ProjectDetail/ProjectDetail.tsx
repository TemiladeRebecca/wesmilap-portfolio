import Navbar from "@/common/Navbar/Navbar";
import { IProject } from "../interface";
import Image from "next/image";
import Footer from "@/common/Footer/Footer";
import { DiscussProject } from "./DiscussProject/DiscussProject";
import { ProjectGallery } from "./ProjectGallery/ProjectGallery";
import { ProjectOverview } from "./ProjectOverview/ProjectOverview";
import { AllProjects } from "./AllProjects/AllProjects";

export default async function ProjectDetail({
  project,
}: {
  project: IProject;
}) {
  const photoCount = project.media.filter(
    (item) => item.type === "image",
  ).length;

  const videoCount = project.media.filter(
    (item) => item.type === "video",
  ).length;

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#123d2b] overflow-x-hidden">
      <Navbar />

      <AllProjects
        photoCount={photoCount}
        project={project}
        videoCount={videoCount}
      />

      <section className="mx-auto max-w-7xl px-5 pt-10 sm:px-8 sm:pt-14 lg:px-12">
        <div className="relative aspect-video overflow-hidden bg-[#e3e9e2]">
          <Image
            src={project.coverImage}
            alt={`${project.title} project cover`}
            fill
            priority
            sizes="(max-width: 1279px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </section>

      <ProjectOverview project={project} />
      <ProjectGallery project={project} />
      <DiscussProject />

      <Footer />
    </main>
  );
}
