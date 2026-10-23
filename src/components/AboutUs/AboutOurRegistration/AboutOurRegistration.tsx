import { SlideInSection } from "@/common/MotionWrapper/MotionWrapper";

export const AboutOurRegistration = () => {
  return (
    <SlideInSection
      direction="right"
      className="bg-[#f7f8f5] px-5 py-16 sm:px-8 lg:px-12"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7927]">
            Registration
          </p>
          <p className="mt-3 text-lg font-bold text-[#123c2d]">12 March 2021</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Company registration date provided.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7927]">
            Business address
          </p>
          <address className="mt-3 not-italic text-sm leading-7 text-[#123c2d]">
            30, Oyewole Road,
            <br />
            Agege, Lagos State,
            <br />
            Nigeria.
          </address>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b7927]">
            Email enquiries
          </p>
          <a
            href="mailto:admin@wesmilap.com"
            className="mt-3 inline-block break-all text-base font-semibold text-[#174b36] transition hover:text-[#9b7927]"
          >
            admin@wesmilap.com
          </a>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Contact us to discuss your requirements.
          </p>
        </div>
      </div>
    </SlideInSection>
  );
};
