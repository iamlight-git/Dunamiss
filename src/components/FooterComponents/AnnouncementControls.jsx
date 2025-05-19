import React from "react";

const categories = ["All", "Events", "Ministry Updates", "General News"];
const sortOptions = ["Latest", "Most Popular"];

const AnnouncementControls = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) => {
  return (
    <div className="bg-white py-6 px-4 border-b border-gray-200 sticky top-[72px] z-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search announcements..."
          className="w-full md:w-1/3 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                category === cat
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          {sortOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        {/* Back to Home Link */}
        <a
          href="/"
          className="text-purple-600 hover:text-purple-800 font-medium text-sm underline"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
};

export default AnnouncementControls;
