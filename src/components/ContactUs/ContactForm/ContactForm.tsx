"use client";

import { SubmitEvent, useState } from "react";
import { CONTACT_EMAIL, inputClassName, labelClassName } from "../data";
import { IContactFormProps } from "../interface";

export default function ContactForm({ services }: IContactFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (!CONTACT_EMAIL) {
      setStatus(
        "The enquiry form is not connected yet. Please configure NEXT_PUBLIC_CONTACT_EMAIL or connect a form submission endpoint before publishing.",
      );
      return;
    }

    const formData = new FormData(form);

    const fields = [
      ["Name", formData.get("name")],
      ["Company / Organisation", formData.get("company") || "Not provided"],
      ["Email", formData.get("email")],
      ["Phone", formData.get("phone") || "Not provided"],
      ["Service required", formData.get("service")],
      ["Project location", formData.get("location") || "Not provided"],
      ["Estimated budget", formData.get("budget") || "Not provided"],
      ["Project details", formData.get("message")],
    ];

    const subject = `Project enquiry from ${formData.get("name")}`;
    const body = fields
      .map(([label, value]) => `${label}: ${value}`)
      .join("\n\n");

    const mailtoUrl = new URL(`mailto:${CONTACT_EMAIL}`);
    mailtoUrl.searchParams.set("subject", subject);
    mailtoUrl.searchParams.set("body", body);

    window.location.href = mailtoUrl.toString();
    setStatus(
      "Your email application should open with the enquiry prepared. Review it and send the email to submit your enquiry.",
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#e2e8e1] bg-white p-5 shadow-[0_16px_60px_rgba(15,45,32,0.06)] sm:p-8 lg:p-9"
    >
      <div className="mb-8 border-b border-[#e4e9e3] pb-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7927]">
          Enquiry form
        </p>
        <h2 className="mt-3 text-2xl font-bold text-[#123c2d]">
          Tell us what you need
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Fields marked with <span className="text-red-600">*</span> are
          required.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={inputClassName}
            required
            maxLength={120}
          />
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClassName}>
            Company / Organisation
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company name"
            className={inputClassName}
            maxLength={160}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            Email address <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClassName}
            required
            maxLength={254}
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClassName}>
            Phone number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your phone number"
            className={inputClassName}
            maxLength={40}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-service" className={labelClassName}>
            Service required <span className="text-red-600">*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            className={inputClassName}
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-location" className={labelClassName}>
            Project location
          </label>
          <input
            id="contact-location"
            name="location"
            type="text"
            placeholder="City, state, or project site"
            className={inputClassName}
            maxLength={180}
          />
        </div>

        <div>
          <label htmlFor="contact-budget" className={labelClassName}>
            Estimated budget{" "}
            <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <select
            id="contact-budget"
            name="budget"
            defaultValue=""
            className={inputClassName}
          >
            <option value="">Prefer not to say</option>
            <option value="Under ₦5 million">Under ₦5 million</option>
            <option value="₦5 million – ₦25 million">
              ₦5 million – ₦25 million
            </option>
            <option value="₦25 million – ₦100 million">
              ₦25 million – ₦100 million
            </option>
            <option value="Above ₦100 million">Above ₦100 million</option>
            <option value="To be determined">To be determined</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className={labelClassName}>
            Project details <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Describe your project, requirements, objectives, and expected timeline..."
            className={`${inputClassName} min-h-36 resize-y`}
            required
            minLength={10}
            maxLength={5000}
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Please avoid including confidential information in this initial
            enquiry.
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#174b36] px-6 py-4 text-sm font-bold text-white transition duration-300 hover:bg-[#103727] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b99a43] focus-visible:ring-offset-2 sm:w-auto"
      >
        Prepare Project Enquiry
        <span aria-hidden="true">↗</span>
      </button>

      {status && (
        <p
          role="status"
          aria-live="polite"
          className="mt-4 rounded-md border border-[#dce3dc] bg-[#f7f8f5] p-4 text-sm leading-6 text-[#173e30]"
        >
          {status}
        </p>
      )}

      <p className="mt-5 text-xs leading-5 text-slate-500">
        Your email application must be configured to send email when using this
        form.
      </p>
    </form>
  );
}
