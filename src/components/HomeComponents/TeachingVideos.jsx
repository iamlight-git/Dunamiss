// src/components/TeachingVideos.jsx

import React, { useEffect, useState } from "react";
import { fetchPlaylistVideos } from "../../api/youtube";
import { useNavigate } from "react-router-dom";

const TeachingVideos = () => {
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await fetchPlaylistVideos(6);
        setVideos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Teachings</h2>
          <button
            onClick={() => navigate("/teachings")}
            className="text-red-600 hover:text-red-700 font-medium flex items-center"
          >
            Browse Library <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>

        {loading && <p>Loading videos...</p>}
        {error && <p className="text-red-600">{error}</p>}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {!loading &&
            !error &&
            videos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden rounded-xl">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-xl">
                    <button
                      className="bg-white bg-opacity-90 hover:bg-opacity-100 text-red-600 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
                      onClick={() => setActiveVideo(video)}
                      aria-label={`Play video: ${video.title}`}
                    >
                      <svg
                        className="w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {new Date(video.publishedAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {video.description.length > 100
                      ? video.description.slice(0, 100) + "..."
                      : video.description}
                  </p>
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="text-red-600 hover:text-red-700 font-medium flex items-center"
                  >
                    Watch Now <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative bg-black rounded-lg max-w-7xl w-full h-[90vh] shadow-lg">
            {/* Close button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full p-2 focus:outline-none"
              aria-label="Close video player"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <iframe
              className="w-full h-full rounded-lg"
              src={activeVideo.videoUrl}
              title={activeVideo.title}
              allowFullScreen
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeachingVideos;
