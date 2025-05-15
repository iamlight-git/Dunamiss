import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import { fetchPlaylistVideos } from "../api/youtube";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Teachings = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVideo, setModalVideo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const videosPerPage = 9;

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await fetchPlaylistVideos(50);
        setVideos(data);
      } catch (err) {
        setError("Failed to load videos.");
      } finally {
        setLoading(false);
      }
    };

    loadVideos();
  }, []);

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (sortOption === "newest")
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    if (sortOption === "alphabetical") return a.title.localeCompare(b.title);
    return 0;
  });

  const totalPages = Math.ceil(sortedVideos.length / videosPerPage);
  const currentVideos = sortedVideos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  const openModal = (video) => {
    setModalVideo(video);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalVideo(null);
    setShowModal(false);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortOption]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎓 Teaching Library
          </h1>
          <p className="text-gray-600">
            Explore powerful teachings from anointed speakers
          </p>
        </motion.div>

        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title..."
            className="w-full md:max-w-md border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-700">Sort by:</label>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="newest">Newest</option>
              <option value="alphabetical">A-Z</option>
            </select>
          </div>
        </div>

        {/* Error or Loading */}
        {loading && <p>Loading videos...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {/* Video Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openModal(video)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {new Date(video.publishedAt).toLocaleDateString()}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {video.description?.slice(0, 100)}...
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  currentPage === i + 1
                    ? "bg-red-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {showModal && modalVideo && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full max-h-[90vh] flex flex-col"
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header with close button */}
                <div className="flex justify-end p-2 border-b border-gray-200">
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="w-full aspect-video">
                  <iframe
                    src={modalVideo.videoUrl}
                    title={modalVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="overflow-y-auto px-6 py-4 flex-1">
                  <h3 className="text-xl font-semibold">{modalVideo.title}</h3>
                  <p className="mt-2 text-gray-700 whitespace-pre-line">
                    {modalVideo.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Teachings;
