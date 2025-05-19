import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { worshipSongs } from "../data/worshipSongs";
import { teachingVideos } from "../data/teachingVideos";
import { navItems } from "../data/navItems";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get("query")?.toLowerCase() || "";
  const navigate = useNavigate();
  const [activeAudio, setActiveAudio] = useState(null);

  useEffect(() => {
    const matchedNav = navItems.find((item) => item.name.toLowerCase() === searchTerm);
    if (matchedNav) {
      navigate(matchedNav.path);
    }
  }, [searchTerm, navigate]);

  const matchedWorship = worshipSongs.filter((s) =>
    s.title.toLowerCase().includes(searchTerm)
  );

  const matchedTeaching = teachingVideos.filter((t) =>
    t.title.toLowerCase().includes(searchTerm) || t.speaker.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Search results for: "{searchTerm}"
      </h1>

      {matchedWorship.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Worship Songs</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {matchedWorship.map((song) => (
              <li key={song.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold text-lg">{song.title}</h3>
                <p className="text-gray-600 mb-2">{song.artist}</p>
                <audio
                  src={song.audioUrl}
                  controls
                  onPlay={() => setActiveAudio(song.id)}
                  onPause={() => setActiveAudio(null)}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {matchedTeaching.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Teaching Videos</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {matchedTeaching.map((video) => (
              <li key={video.id} className="bg-white p-4 rounded shadow">
                <h3 className="font-semibold text-lg">{video.title}</h3>
                <p className="text-gray-600 mb-2">{video.speaker}</p>
                <div className="aspect-video">
                  <iframe
                    src={video.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    title={video.title}
                  ></iframe>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {matchedWorship.length === 0 && matchedTeaching.length === 0 && (
        <p className="text-gray-500">No matching songs or teachings found.</p>
      )}
    </div>
  );
};

export default SearchResults;