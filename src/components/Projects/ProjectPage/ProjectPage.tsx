import Link from "next/link";
import Navbar from "@/common/Navbar/Navbar";
import { projects } from "@/components/Projects/data";
import ProjectCard from "@/components/Projects/ProjectCard/ProjectCard";
import Footer from "@/common/Footer/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0b2c1d] text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
        <Link
          href="/#projects"
          className="text-sm font-semibold text-[#e6c775] hover:text-white"
        >
          ← Back to homepage
        </Link>

        <div className="mt-10 max-w-3xl">
          <p className="text-xs font-bold tracking-[0.22em] text-[#e6c775] uppercase">
            Our Portfolio
          </p>

          <h1 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Projects &amp; Experience
          </h1>

          <p className="mt-6 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
            Explore project details, the challenges addressed, the construction
            approach and available visual documentation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
