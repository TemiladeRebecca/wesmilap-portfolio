export const AboutOurDirection = () => {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7927]">
            Our direction
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#123c2d] sm:text-4xl lg:text-5xl">
            What guides our purpose.
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            The following mission and vision are proposed statements based on
            the company&apos;s stated business scope. They can be refined to
            reflect your approved corporate strategy.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="relative overflow-hidden bg-[#123c2d] p-7 text-white sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e0bf61]">
              Our mission · Proposed
            </span>

            <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
              Delivering practical engineering solutions.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base">
              To provide responsive engineering, construction, and related
              services that address client requirements through thoughtful
              planning, professional collaboration, attention to quality, and
              responsible project execution.
            </p>

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-white/10"
            />
          </article>

          <article className="relative overflow-hidden border border-[#e1e7df] bg-[#f7f8f5] p-7 sm:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7927]">
              Our vision · Proposed
            </span>

            <h3 className="mt-5 text-2xl font-bold text-[#123c2d] sm:text-3xl">
              Building a trusted engineering partner.
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              To grow into a trusted Nigerian engineering and construction
              company recognised for dependable service, responsible business
              practices, and the ability to support diverse infrastructure and
              development needs.
            </p>

            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-[#b99a43]/20"
            />
          </article>
        </div>
      </div>
    </section>
  );
};
