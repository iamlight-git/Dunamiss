// src/api/youtube.js

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID;
console.log("youtube.js module loaded");


export async function fetchPlaylistVideos(maxResults = 10) {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?` +
    `part=snippet&maxResults=${maxResults}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();


  if (!response.ok) {
    throw new Error(data.error?.message || "Failed to fetch YouTube videos");
  }

  return data.items.map((item) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnail: item.snippet.thumbnails.high.url,
    publishedAt: item.snippet.publishedAt,
    videoUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
  }));
}
