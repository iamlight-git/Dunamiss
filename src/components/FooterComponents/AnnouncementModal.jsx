import React from "react";
import { format } from "date-fns";
import { FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";

const categoryColors = {
  Events: "bg-blue-200 text-blue-800",
  "Ministry Updates": "bg-green-200 text-green-800",
  "General News": "bg-yellow-200 text-yellow-800",
};

const AnnouncementModal = ({ announcement, onClose }) => {
  if (!announcement) return null;

  const shareUrl = window.location.href;
  const { title, date, description, category, image } = announcement;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg overflow-auto max-w-3xl w-full max-h-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover rounded mb-6"
          />
        )}

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${categoryColors[category]}`}
          >
            {category}
          </span>
        </div>

        <p className="text-gray-500 mb-6">
          {format(new Date(date), "MMMM dd, yyyy")}
        </p>
        {announcement.isEvent && announcement.location && (
          <p className="text-gray-600 mb-4">
            📍 Location:{" "}
            <span className="font-medium">{announcement.location}</span>
          </p>
        )}

        <p className="text-gray-700 whitespace-pre-line">{description}</p>

        <div className="mt-8 flex space-x-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              shareUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
            aria-label="Share on Facebook"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              shareUrl
            )}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
            aria-label="Share on Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(
              title
            )}&body=${encodeURIComponent(shareUrl)}`}
            className="text-gray-700 hover:text-gray-900"
            aria-label="Share via Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
