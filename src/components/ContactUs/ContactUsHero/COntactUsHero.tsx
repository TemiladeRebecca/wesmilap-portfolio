import Link from "next/link";

export const ContactUsHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b2b20] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#c7a449]/20 blur-3xl"
      />

      <div className="mx-auto max-w-7xl">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-sm text-white/60"
        >
          <Link href="/" className="transition hover:text-[#e4c875]">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-[#e4c875]">Contact</span>
        </nav>

        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#e0bf61]">
            <span className="h-px w-9 bg-[#e0bf61]" />
            Let&apos;s start a conversation
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
            Have a project in mind?
            <span className="mt-2 block text-[#e0bf61]">Let&apos;s talk.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Tell us what you&apos;re planning. Whether it&apos;s an engineering,
            construction, infrastructure, or project management requirement,
            start the conversation with WESMILAP International Limited.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-[#d3b15b] px-6 py-4 text-sm font-bold text-[#102d21] transition hover:bg-[#e5c975] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b2b20]"
            >
              Discuss Your Project
              <span aria-hidden="true">↓</span>
            </a>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#e0bf61] hover:text-[#e0bf61]"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>

        <div className="mt-16 grid max-w-4xl gap-6 border-t border-white/15 pt-7 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Tell us your needs",
              description: "Share your project scope and objectives.",
            },
            {
              number: "02",
              title: "Discuss the details",
              description: "Outline your requirements and expectations.",
            },
            {
              number: "03",
              title: "Explore next steps",
              description: "Determine a suitable way forward together.",
            },
          ].map((item) => (
            <div key={item.number} className="flex gap-4">
              <span className="text-sm font-bold text-[#e0bf61]">
                {item.number}
              </span>
              <div>
                <h2 className="text-sm font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
