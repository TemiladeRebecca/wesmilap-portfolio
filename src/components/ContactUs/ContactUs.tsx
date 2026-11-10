import Footer from "@/common/Footer/Footer";
import Navbar from "@/common/Navbar/Navbar";
import { ProjectEnquiries } from "./ProjectEnquiries/ProjectEnquiries";
import { ContactUsHero } from "./ContactUsHero/COntactUsHero";
import { LearnMore } from "./LearnMore/LearnMore";

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white text-[#173e30]">
      <Navbar />

      <ContactUsHero />

      <ProjectEnquiries />

      <LearnMore />

      <Footer />
    </main>
  );
}
