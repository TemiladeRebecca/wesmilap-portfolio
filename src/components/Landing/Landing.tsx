import Navbar from "@/common/Navbar/Navbar";
import Projects from "../Projects/Projects";
import Expertise from "./Expertise/Expertise";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import WhoWeServe from "./WhoWeServe/WhoWeServe";
import FAQ from "./FAQ/FAQ";
import Footer from "@/common/Footer/Footer";

export const Landing = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Expertise />
      <WhoWeServe />
      <Projects />
      <FAQ />
      <Footer />
    </div>
  );
};
