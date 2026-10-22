import type { Metadata } from "next";

import ContactUs from "@/components/ContactUs/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us | Project Enquiries",
  description:
    "Contact WESMILAP International Limited to discuss engineering, construction, civil infrastructure, power infrastructure, and project management requirements in Nigeria.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact WESMILAP International Limited",
    description:
      "Discuss your next engineering, construction, or infrastructure project with WESMILAP International Limited.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactUsPage() {
  return <ContactUs />;
}
