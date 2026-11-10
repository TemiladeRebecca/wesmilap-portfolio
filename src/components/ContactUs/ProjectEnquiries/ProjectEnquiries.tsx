import ContactForm from "../ContactForm/ContactForm";
import { services } from "../data";

export const ProjectEnquiries = () => {
  return (
    <section
      id="enquiry"
      className="scroll-mt-24 bg-[#f7f8f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9b7927]">
            Project enquiries
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#123c2d] sm:text-4xl">
            Tell us about your project.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Provide a few details so the scope of your enquiry is clear. You can
            include your project location, the services you need, and any
            important requirements or deadlines.
          </p>

          <div className="mt-9 space-y-5">
            <div className="flex gap-4 border-t border-[#dce3dc] pt-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#174b36] text-[#e0bf61]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M4 5h16v14H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-[#173e30]">
                  Project enquiries
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Use the form to outline your requirements and provide the best
                  way to follow up.
                </p>
              </div>
            </div>

            <div className="flex gap-4 border-t border-[#dce3dc] pt-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#174b36] text-[#e0bf61]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
                  <circle cx="12" cy="10" r="2.3" />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold text-[#173e30]">
                  Service location
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Include the project&apos;s location in your message so your
                  requirements can be understood in context.
                </p>
              </div>
            </div>

            <div className="border-t border-[#dce3dc] pt-5">
              <p className="text-sm leading-7 text-slate-600">
                Not sure which service you need? Choose &quot;Other / Not Sure
                Yet&quot; and explain your objective in the project details
                field.
              </p>
            </div>
          </div>
        </div>

        <ContactForm services={services} />
      </div>
    </section>
  );
};
