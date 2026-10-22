import Link from "next/link";

export const DiscussProject = () => {
  return (
    <section className="bg-[#123d2b] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[#e6c775] uppercase">
            Have a similar project?
          </p>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            Let&apos;s discuss your requirements.
          </h2>
        </div>

        <Link
          href="/#contact"
          className="inline-flex min-h-12 w-fit items-center justify-center gap-4 bg-[#d8b45a] px-6 py-4 text-sm font-bold text-[#123d2b] transition-colors hover:bg-[#edcf7b]"
        >
          Discuss a Project
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
};
