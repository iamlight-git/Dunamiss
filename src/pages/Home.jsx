import React, { useState } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { navItems } from "../data/navItems";
import Hero from "../components/HomeComponents/Hero";
import WorshipSongs from "../components/HomeComponents/WorshipSongs";
import TeachingVideos from "../components/HomeComponents/TeachingVideos";
import UpcomingEvents from "../components/HomeComponents/UpcomingEvents";
import Footer from "../layout/Footer";


const Home = () => {
   const [activeVideo, setActiveVideo] = useState(null);
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <Sidebar navItems={navItems} isOpen={false} onClose={() => {}} />
          <Hero />
          <WorshipSongs />
          <TeachingVideos />
          <UpcomingEvents />
          <Footer />
          {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-4xl w-full">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="text-xl font-bold text-gray-900">
                {activeVideo.title}
              </h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9 bg-black flex items-center justify-center">
              <p className="text-white text-lg">Video player would load here</p>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Home;
