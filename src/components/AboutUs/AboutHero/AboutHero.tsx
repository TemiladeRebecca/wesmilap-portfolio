import Image from "next/image";
import Link from "next/link";
import { whatWeDoAssets } from "../../../../public/index";

export const AboutHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b2b20] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-32">
      <Image
        src={whatWeDoAssets.civilConstructionImage}
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

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#0b2b20]/20"
      />

      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-9 flex items-center gap-2 text-sm text-white/60"
        >
          <Link href="/" className="transition hover:text-[#e4c875]">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#e4c875]">About Us</span>
        </nav>

        <div className="max-w-4xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#e0bf61]">
            <span className="h-px w-9 bg-[#e0bf61]" />
            About WESMILAP
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Engineering ideas.
            <span className="block text-[#e0bf61]">
              Building possibilities.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            WESMILAP International Limited is a Nigerian company whose principal
            business activity is civil engineering and building. Our broader
            business scope encompasses construction, infrastructure,
            engineering, telecommunications, and related project support
            services.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-[#d3b15b] px-6 py-4 text-sm font-bold text-[#102d21] transition hover:bg-[#e5c975] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b2b20]"
            >
              Discuss Your Project
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center rounded-md border border-white/30 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#e0bf61] hover:text-[#e0bf61]"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/20 pt-7 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-bold text-[#e0bf61]">2021</p>
            <p className="mt-2 text-sm text-white/75">Year of registration</p>
          </div>

          <div>
            <p className="text-xl font-bold text-white">Civil Engineering</p>
            <p className="mt-2 text-sm text-white/75">
              Principal business activity
            </p>
          </div>

          <div>
            <p className="text-xl font-bold text-white">Nigeria</p>
            <p className="mt-2 text-sm text-white/75">Company location</p>
          </div>
        </div>
      </div>
    </section>
  );
};
