import Navbar from "@/common/Navbar/Navbar";
import Footer from "@/common/Footer/Footer";
import { PeopleBehindTheCompany } from "./PeopleBehindTheCompany/PeopleBehindTheCompany";
import { AboutHero } from "./AboutHero/AboutHero";
import { AboutWhoWeAre } from "./AboutWhoWeAre/AboutWhoWeAre";
import { AboutCapabilities } from "./AboutCapabilities/AboutCapabilities";
import { AboutOurDirection } from "./AboutOurDirection/AboutOurDirection";
import { AboutOurCommitments } from "./AboutOurCommitments/AboutOurCommitments";
import { AboutOurRegistration } from "./AboutOurRegistration/AboutOurRegistration";
import { AboutFinalCTA } from "./AboutFinalCTA/AboutFinalCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

export default function AboutUs() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WESMILAP International Limited",
    url: siteUrl,
    email: "admin@wesmilap.com",
    foundingDate: "2021-03-12",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30, Oyewole Road, Agege",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    description:
      "A Nigerian company whose principal business activity is civil engineering and building, with a broader stated business scope covering construction and related engineering and commercial services.",
    knowsAbout: [
      "Civil engineering",
      "Structural engineering",
      "Building construction",
      "Infrastructure development",
      "Power infrastructure",
      "Telecommunications services",
      "Oil and gas exploration support",
      "Project management",
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#173e30]">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />

      <AboutHero />

      <AboutWhoWeAre />

      <AboutCapabilities />

      <AboutOurDirection />
      <AboutOurCommitments />

      <PeopleBehindTheCompany />

      <AboutOurRegistration />

      <AboutFinalCTA />

      <Footer />
    </main>
  );
}
