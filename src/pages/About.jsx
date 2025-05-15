import AboutHero from "../components/sections/AboutHero";
import CallToAction from "../components/sections/CallToAction";
import FounderSection from "../components/sections/FounderSection";
import TeamSection from "../components/sections/TeamSection";
import Testimonials from "../components/sections/Testimonials";
import VisionHistory from "../components/sections/VisionHistory";
import Header from "../layout/Header";




const About = () => {
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
    </>
  );
};

export default About;