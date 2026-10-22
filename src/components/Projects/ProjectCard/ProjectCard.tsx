import Image from "next/image";
import Link from "next/link";
import { IProjectCardProps } from "../interface";

export default function ProjectCard({ project }: IProjectCardProps) {
  const imageCount = project.media.filter(
    (item) => item.type === "image",
  ).length;

  const videoCount = project.media.filter(
    (item) => item.type === "video",
  ).length;

  return (
    <article className="group overflow-hidden border border-white/10 bg-white/4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d8b45a]/60 hover:bg-white/[0.07]">
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#d8b45a]"
      >
        <div className="relative aspect-16/10 overflow-hidden bg-[#173f2c]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#092719]/90 via-[#092719]/10 to-transparent" />

          <span className="absolute left-4 top-4 bg-[#d8b45a] px-3 py-2 text-[10px] font-bold tracking-widest text-[#123d2b] uppercase">
            {project.category}
          </span>

          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
            <span className="text-sm font-medium text-white/90">
              {imageCount} photos · {videoCount} videos
            </span>
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/50 bg-[#123d2b]/60 text-xl text-[#d8b45a] transition-colors group-hover:bg-[#d8b45a] group-hover:text-[#123d2b]"
            >
              ↗
            </span>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-wider text-[#d8b45a]">
            {project.year}
          </p>

          <h3 className="mt-3 text-xl font-bold text-white transition-colors group-hover:text-[#e6c775]">
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-white/65">
            {project.summary}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/55">
            <span className="truncate">{project.location}</span>
            <span className="shrink-0 font-semibold text-[#d8b45a]">
              View project
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
