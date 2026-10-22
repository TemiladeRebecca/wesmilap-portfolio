import AboutUs from "@/components/AboutUs/AboutUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WESMILAP | Civil Engineering & Building",
  description:
    "Learn about WESMILAP International Limited, a Nigerian civil engineering and building company with a broad business scope covering construction, infrastructure, engineering, telecommunications, and project support services.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About WESMILAP International Limited",
    description:
      "Discover WESMILAP's business scope, engineering capabilities, values, and commitment to responsible project delivery in Nigeria.",
    siteName: "WESMILAP International Limited",
  },
};

export default function AboutUsPage() {
  return <AboutUs />;
}
