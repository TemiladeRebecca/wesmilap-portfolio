import Link from "next/link";

export const AboutFinalCTA = () => {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-sm bg-[#123c2d] px-7 py-10 text-white sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10"
        />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#e0bf61]">
              Let&apos;s work together
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Have an engineering or construction project to discuss?
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
              Share your requirements with WESMILAP International Limited and
              start a conversation about your project.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-md bg-[#d3b15b] px-6 py-4 text-sm font-bold text-[#102d21] transition hover:bg-[#e5c975] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#123c2d]"
          >
            Contact WESMILAP
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
