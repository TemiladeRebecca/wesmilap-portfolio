import Link from "next/link";
import { faqs } from "./data";
import {
  DropInItem,
  SlideInSection,
  StaggerContainer,
} from "@/common/MotionWrapper/MotionWrapper";

export default function FAQ() {
  return (
    <SlideInSection
      direction="left"
      transition={{ duration: 2, ease: [0.21, 0.47, 0.32, 0.98] }}
      sctionId="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-[#f7f8f5] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#d7b45a]/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#9b7927]">
            <span className="h-px w-8 bg-[#b99a43]" />
            Frequently asked questions
          </span>

          <h2
            id="faq-heading"
            className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#123c2d] sm:text-4xl lg:text-5xl"
          >
            Questions before we get started?
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
            Find answers to common questions about our services and how to begin
            a project conversation with WESMILAP.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#174b36] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#103727] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b99a43] focus-visible:ring-offset-2"
          >
            Ask us a question
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <StaggerContainer
          className="divide-y divide-[#dce3dc] border-y border-[#dce3dc]"
          delayChildren={0.5}
          staggerBy={0.3}
        >
          {faqs.map((faq, index) => (
            <DropInItem
              key={faq.question}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className=""
              direction="down"
              distance={50}
            >
              <details key={faq.question} className="group py-5 sm:py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 rounded-sm text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b99a43] focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden">
                  <span className="flex gap-4 text-base font-semibold leading-7 text-[#173e30] sm:text-lg">
                    <span className="pt-0.5 text-sm font-medium tabular-nums text-[#b08c36]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d5dfd6] text-xl text-[#174b36] transition duration-300 group-open:rotate-45 group-open:border-[#b99a43] group-open:bg-[#174b36] group-open:text-white"
                  >
                    +
                  </span>
                </summary>

                <div className="pb-2 pl-10 pr-2 pt-4 sm:pl-12">
                  <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </DropInItem>
          ))}
        </StaggerContainer>
      </div>
    </SlideInSection>
  );
}
