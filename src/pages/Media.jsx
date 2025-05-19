import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const content = {
  teaching: {
    title: "Teaching the Word",
    description:
      "Explore our teaching series, Bible curriculum, and international Bible schools in Peru and Croatia.",
    video: "https://www.youtube.com/embed/i9PgakHZmms",
  },
  unreached: {
    title: "Reaching the Unreached",
    description:
      "Discover our outreach efforts in earthquake-affected regions, church planting missions, and more.",
    video: "https://www.youtube.com/embed/YH6WzKzJmLg",
  },
  awakening: {
    title: "Awakening the Nations",
    description:
      "Dive into our School of the Spirit programs, worship movements, and testimonies from around the world.",
    video: "https://www.youtube.com/embed/RpC5zq8ZYEk",
  },
};

const Media = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl font-bold text-purple-700 mb-6">🎥 Media</h1>

        {!section && (
          <p className="text-gray-600">
            Please select a media category from the menu to view its content.
          </p>
        )}

        {section && content[section] && (
          <div className="transition-opacity duration-500 ease-in-out animate-fadeIn">
            <h2 className="text-2xl font-semibold text-purple-700">
              {content[section].title}
            </h2>
            <p className="text-gray-700">{content[section].description}</p>
            <div className="aspect-video mt-4">
              <iframe
                className="w-full h-full"
                src={content[section].video}
                title={content[section].title}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Media;
