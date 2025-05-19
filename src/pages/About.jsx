import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AboutHero from "../components/sections/AboutHero";
import CallToAction from "../components/sections/CallToAction";
import FounderSection from "../components/sections/FounderSection";
import TeamSection from "../components/sections/TeamSection";
import Testimonials from "../components/sections/Testimonials";
import VisionHistory from "../components/sections/VisionHistory";
import Footer from "../layout/Footer";
import Header from "../layout/Header";




const About = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (section) {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
       <AboutHero />
       <FounderSection />
       <VisionHistory />
       <TeamSection />
       <Testimonials />
       <CallToAction />

      
     

      </div>
      <Footer />
    </>
  );
};

export default About;