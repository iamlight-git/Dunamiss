import React, { useState, useRef, useEffect } from "react";
import { worshipSongs } from "../../data/worshipSongs";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaVolumeUp,
  FaVolumeMute,
  FaMoon,
  FaSun,
  FaListUl,
  FaCompactDisc,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const WorshipSongs = () => {
  const [activeSong, setActiveSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [miniPlayer, setMiniPlayer] = useState(false);
  const [showQueue, setShowQueue] = useState(false);

  const audioRef = useRef(null);

  // Play/pause on activeSong or isPlaying change
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, activeSong]);

  // Update current time every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Reset on song end
  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  // Select song or toggle play/pause if same
  const handleSelectSong = (song) => {
    if (song.id === activeSong?.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveSong(song);
      setIsPlaying(true);
      setShowLyrics(false);
      setShowQueue(false);
      setMiniPlayer(false);
    }
  };

  const handleNext = () => {
    if (!activeSong) return;
    const index = worshipSongs.findIndex((s) => s.id === activeSong.id);
    const next = worshipSongs[(index + 1) % worshipSongs.length];
    setActiveSong(next);
    setIsPlaying(true);
    setShowLyrics(false);
    setShowQueue(false);
    setMiniPlayer(false);
  };

  const handlePrev = () => {
    if (!activeSong) return;
    const index = worshipSongs.findIndex((s) => s.id === activeSong.id);
    const prev = worshipSongs[(index - 1 + worshipSongs.length) % worshipSongs.length];
    setActiveSong(prev);
    setIsPlaying(true);
    setShowLyrics(false);
    setShowQueue(false);
    setMiniPlayer(false);
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    audioRef.current.volume = newVol;
    setVolume(newVol);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLyrics = () => {
    setShowLyrics(!showLyrics);
    setShowQueue(false);
  };
  const toggleQueue = () => {
    setShowQueue(!showQueue);
    setShowLyrics(false);
  };
  const toggleMiniPlayer = () => setMiniPlayer(!miniPlayer);

  return (
    <section className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen py-8`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Worship Songs</h2>
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-lg focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>

        {/* Songs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {worshipSongs.map((song) => (
            <div
              key={song.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer ${
                activeSong?.id === song.id ? "ring-4 ring-red-500" : ""
              }`}
              onClick={() => handleSelectSong(song)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && handleSelectSong(song)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center"
                    aria-label={activeSong?.id === song.id && isPlaying ? "Pause" : "Play"}
                  >
                    {activeSong?.id === song.id && isPlaying ? (
                      <FaPause className="text-xl" />
                    ) : (
                      <FaPlay className="text-xl" />
                    )}
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{song.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} src={activeSong?.audioUrl} onEnded={handleEnded} />

      {/* Mini Player Toggle Button */}
      {activeSong && (
        <button
          onClick={toggleMiniPlayer}
          className="fixed bottom-28 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition"
          aria-label={miniPlayer ? "Expand Player" : "Minimize Player"}
        >
          {miniPlayer ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </button>
      )}

      {/* Audio Player */}
      {activeSong && !miniPlayer && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-4xl z-40"
          aria-label="Full audio player"
        >
          <div
            className="relative flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-white/10 backdrop-blur-lg px-6 py-4 shadow-2xl border border-white/20"
            style={{
              backgroundImage: `url(${activeSong.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-2xl z-0" />

            <img
              src={activeSong.image}
              alt="Cover"
              className="relative z-10 w-20 h-20 rounded-xl object-cover"
            />

            <div className="relative z-10 flex-1 w-full sm:mx-4">
              <h4 className="text-white font-semibold text-lg truncate">{activeSong.title}</h4>
              <p className="text-gray-300 text-sm truncate">{activeSong.artist}</p>
              <input
                type="range"
                min={0}
                max={audioRef.current?.duration || 100}
                value={currentTime}
                onChange={handleProgressChange}
                className="w-full mt-2 accent-red-500 cursor-pointer"
                aria-label="Song progress"
              />
            </div>

            <div className="relative z-10 flex items-center gap-6 text-white text-2xl">
              <button onClick={handlePrev} className="hover:text-red-500 transition" aria-label="Previous song">
                <FaBackward />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-red-500 hover:bg-red-600 flex items-center justify-center rounded-full shadow-md transition"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={handleNext} className="hover:text-red-500 transition" aria-label="Next song">
                <FaForward />
              </button>
            </div>

            <div className="relative z-10 flex items-center gap-3 text-white text-sm ml-4 max-w-xs w-full sm:max-w-none">
              <button className="hover:text-red-500 transition" aria-label="Toggle mute">
                {volume === 0 ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
                className="accent-red-500 cursor-pointer w-full"
                aria-label="Volume control"
              />
            </div>

            <div className="relative z-10 flex items-center gap-4 ml-4 text-white">
              <button
                onClick={toggleLyrics}
                className={`flex items-center gap-1 px-3 py-1 rounded-md transition ${
                  showLyrics ? "bg-red-600" : "hover:bg-red-600"
                }`}
                aria-pressed={showLyrics}
                aria-label="Toggle lyrics panel"
              >
                <FaCompactDisc />
                <span className="hidden sm:inline">Lyrics</span>
              </button>

              <button
                onClick={toggleQueue}
                className={`flex items-center gap-1 px-3 py-1 rounded-md transition ${
                  showQueue ? "bg-red-600" : "hover:bg-red-600"
                }`}
                aria-pressed={showQueue}
                aria-label="Toggle playlist queue"
              >
                <FaListUl />
                <span className="hidden sm:inline">Queue</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mini Player (compact) */}
      {activeSong && miniPlayer && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center px-4 py-2 gap-4 z-40"
          style={{
            backgroundImage: `url(${activeSong.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
          aria-label="Mini audio player"
        >
          <img
            src={activeSong.image}
            alt="Cover"
            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
          />
          <div className="flex-1 overflow-hidden">
            <h5 className="text-white truncate font-semibold">{activeSong.title}</h5>
            <p className="text-gray-300 text-sm truncate">{activeSong.artist}</p>
          </div>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white text-xl"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
        </div>
      )}

      {/* Lyrics Panel */}
      {showLyrics && activeSong && !miniPlayer && (
        <div
          className="fixed bottom-24 left-1/2 transform -translate-x-1/2 w-[95%] max-w-4xl p-4 bg-black bg-opacity-80 text-white rounded-lg max-h-64 overflow-y-auto z-40"
          aria-live="polite"
        >
          <h3 className="font-bold mb-2 text-lg">Lyrics - {activeSong.title}</h3>
          <pre className="whitespace-pre-wrap">{activeSong.lyrics || "No lyrics available."}</pre>
        </div>
      )}

      {/* Playlist Queue */}
      {showQueue && activeSong && !miniPlayer && (
        <aside
          className="fixed bottom-24 right-6 w-72 max-h-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-y-auto z-40"
          aria-label="Playlist queue"
        >
          <h4 className="text-center font-semibold p-2 border-b border-gray-300 dark:border-gray-700">
            Playlist
          </h4>
          <ul>
            {worshipSongs.map((song) => (
              <li
                key={song.id}
                className={`p-3 cursor-pointer hover:bg-red-100 dark:hover:bg-red-700 ${
                  activeSong?.id === song.id ? "bg-red-200 dark:bg-red-600 font-semibold" : ""
                }`}
                onClick={() => handleSelectSong(song)}
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && handleSelectSong(song)}
              >
                {song.title} - {song.artist}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </section>
  );
};

export default WorshipSongs;
