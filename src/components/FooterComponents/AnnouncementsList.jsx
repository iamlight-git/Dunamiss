import React, { useState } from "react";
import { announcements } from "../../data/announcements";
import { events } from "../../data/events";
import { format } from "date-fns";
import AnnouncementModal from "./AnnouncementModal";

const categoryColors = {
  Events: "bg-blue-200 text-blue-800",
  "Ministry Updates": "bg-green-200 text-green-800",
  "General News": "bg-yellow-200 text-yellow-800",
  All: "bg-gray-200 text-gray-700",
};

const AnnouncementsList = ({ search, category, sort }) => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const filtered = announcements.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  // Merge upcoming events if category is Events
  const merged = category === "Events"
    ? [
        ...filtered,
        ...events.map((event) => ({
          id: `event-${event.id}`,
          title: event.title,
          description: event.description,
          date: event.date,
          category: "Events",
          image: event.image,
          location: event.location,
          isEvent: true,
        })),
      ]
    : filtered;

  const sorted = [...merged].sort((a, b) => {
    if (sort === "Latest") return new Date(b.date) - new Date(a.date);
    if (sort === "Most Popular") return (b.popularity || 0) - (a.popularity || 0);
    return 0;
  });

  if (sorted.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600">
        <p>No announcements found matching your criteria.</p>
        <p>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map(({ id, title, date, description, category, image }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedAnnouncement(sorted.find((a) => a.id === id))}
            >
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg mb-4 object-cover h-40 w-full"
                />
              )}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <span
                  className={`text-sm font-semibold px-2 py-1 rounded-full ${categoryColors[category]}`}
                >
                  {category}
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-2">
                {format(new Date(date), "MMMM dd, yyyy")}
              </p>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedAnnouncement(sorted.find((a) => a.id === id));
                }}
                className="mt-4 text-purple-600 hover:text-purple-800 font-medium self-start"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnnouncementModal
        announcement={selectedAnnouncement}
        onClose={() => setSelectedAnnouncement(null)}
      />
    </>
  );
};

export default AnnouncementsList;