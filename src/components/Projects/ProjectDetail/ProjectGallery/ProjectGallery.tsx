import Image from "next/image";
import { stages } from "../../data";
import { IProject } from "../../interface";
import { SlideInSection } from "@/common/MotionWrapper/MotionWrapper";

export const ProjectGallery = ({ project }: { project: IProject }) => {
  return (
    <SlideInSection
      direction="left"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
      sctionId="project-gallery"
      aria-labelledby="gallery-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 sm:mb-14">
          <p className="text-xs font-bold tracking-[0.22em] text-[#99751f] uppercase">
            Project Gallery
          </p>

          <h2
            id="gallery-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            The journey from start to finish.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#627067] sm:text-base">
            Explore photographs and video documentation of the project
            throughout its different stages.
          </p>
        </div>

        <div className="space-y-14 sm:space-y-16">
          {stages.map((stage) => {
            const stageMedia = project.media.filter(
              (item) => item.stage === stage,
            );

            if (stageMedia.length === 0) {
              return null;
            }

            return (
              <div key={stage}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-2 w-2 shrink-0 bg-[#d8b45a]" />
                  <h3 className="text-xl font-bold sm:text-2xl">{stage}</h3>
                  <span className="h-px flex-1 bg-[#123d2b]/10" />
                  <span className="text-xs text-[#627067]">
                    {stageMedia.length}{" "}
                    {stageMedia.length === 1 ? "item" : "items"}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {stageMedia.map((media, index) => (
                    <article
                      key={`${media.src}-${index}`}
                      className="overflow-hidden border border-[#123d2b]/10 bg-[#f7f8f5]"
                    >
                      <div className="relative aspect-4/3 overflow-hidden bg-[#e3e9e2]">
                        {media.type === "image" ? (
                          <Image
                            src={media.src}
                            alt={media.alt}
                            fill
                            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        ) : (
                          <video
                            controls
                            preload="metadata"
                            playsInline
                            aria-label={media.alt}
                            className="h-full w-full object-contain"
                          >
                            <source src={media.src} type="video/mp4" />
                            Your browser does not support HTML video.
                          </video>
                        )}
                      </div>

                      <div className="p-4">
                        <span className="text-[10px] font-bold tracking-[0.16em] text-[#99751f] uppercase">
                          {media.type === "video" ? "Video" : "Photograph"}
                        </span>

                        <h4 className="mt-2 text-sm font-bold">
                          {media.caption}
                        </h4>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {project.media.length === 0 && (
          <p className="border border-dashed border-[#123d2b]/20 p-8 text-sm text-[#627067]">
            Project photographs and videos will be added here.
          </p>
        )}
      </div>
    </SlideInSection>
  );
};
