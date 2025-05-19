import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import GiveHero from "../components/FooterComponents/GiveHero";
import GiveOptions from "../components/FooterComponents/GiveOptions";
import GiveFAQ from "../components/FooterComponents/GiveFAQ";
const Give = () => {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <GiveHero />
        <GiveOptions />
        <GiveFAQ />
        {/* More components will go here */}
      </main>
      <Footer />
    </>
  );
};

export default Give;