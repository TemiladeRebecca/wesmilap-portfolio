const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

const inputClassName =
  "mt-2 w-full rounded-md border border-[#d8e0d8] bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#b99a43] focus:ring-2 focus:ring-[#b99a43]/20";

const labelClassName = "text-sm font-semibold text-[#173e30]";
const services = [
  "Power Infrastructure",
  "Civil & Structural Engineering",
  "Building Construction",
  "Project Management",
  "Other / Not Sure Yet",
];
export { labelClassName, CONTACT_EMAIL, inputClassName, services };
