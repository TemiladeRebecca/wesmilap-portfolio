import Link from "next/link";

export const LearnMore = () => {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-xl border border-[#e4e9e3] bg-white p-7 shadow-sm sm:p-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7927]">
            Learn more about us
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[#123c2d] sm:text-3xl">
            Looking for the right project partner?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Explore our services, expertise, and project portfolio to learn more
            about WESMILAP.
          </p>
        </div>

        <Link
          href="/#services"
          className="inline-flex w-fit shrink-0 items-center gap-3 rounded-md bg-[#174b36] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#103727]"
        >
          <span className="text-slate-200">Explore Our Services</span>{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
};
