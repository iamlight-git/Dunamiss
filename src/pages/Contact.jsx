import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ContactHero from "../components/FooterComponents/ContactHero";
import ContactInfo from "../components/FooterComponents/ContactInfo";
import ContactForm from "../components/FooterComponents/ContactForm";
const Contact = () => {
  return (
   <>
      <Header />
      <main className="bg-white min-h-screen pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4 space-y-14">
          <ContactHero />
          <ContactInfo />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;