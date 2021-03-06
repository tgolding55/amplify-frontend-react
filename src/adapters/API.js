const API_ENDPOINT = "https://amplify-backend.herokuapp.com/";
const SPOTIFY_ENDPOINT = API_ENDPOINT + "spotify/";
const SONG_QUERY = SPOTIFY_ENDPOINT + "search";
const PLAYLIST_ENDPOINT = SPOTIFY_ENDPOINT + "playlists";
const TOPTRACKS_ENDPOINT = SPOTIFY_ENDPOINT + "toptracks";
const LYRICS_ENDPOINT = SPOTIFY_ENDPOINT + "lyrics";
const FEATUREDPLAYLIST_ENDPOINT = PLAYLIST_ENDPOINT + "/featured";
const jsonify = resp => resp.json();

//lyrics api
const fetchLyrics = (artist, track) =>
  fetch(LYRICS_ENDPOINT + "?artist=" + artist + "&track=" + track).then(
    jsonify
  );

//Spotify api
const fetchSongQuery = (query, accessToken) =>
  fetch(SONG_QUERY + "?search=" + query + "&auth=" + accessToken).then(jsonify);

const getPlaylists = accessToken =>
  fetch(PLAYLIST_ENDPOINT + "?auth=" + accessToken).then(jsonify);

const getTopTracks = (accessToken, timeRange) =>
  fetch(
    TOPTRACKS_ENDPOINT + "?auth=" + accessToken + "&time_range=" + timeRange
  ).then(jsonify);

const postPlaylist = (accessToken, name, description, publicBool) => {
  const body = { name: name, description: description, public: publicBool };
  return fetch(PLAYLIST_ENDPOINT + "?auth=" + accessToken, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(jsonify);
};

const addToPlaylist = (accessToken, playlistId, songURIs) =>
  fetch(
    PLAYLIST_ENDPOINT +
      "/" +
      playlistId +
      "/?auth=" +
      accessToken +
      "&songURIs=" +
      songURIs.join("%2C"),
    { method: "POST" }
  ).then(jsonify);

const getTrackFromPlaylist = (accessToken, playlistId) =>
  fetch(PLAYLIST_ENDPOINT + "/" + playlistId + "/?auth=" + accessToken).then(
    jsonify
  );

const getFeaturedPlaylists = accessToken =>
  fetch(FEATUREDPLAYLIST_ENDPOINT + "/?auth=" + accessToken).then(jsonify);

export default {
  fetchSongQuery,
  getPlaylists,
  getTopTracks,
  postPlaylist,
  fetchLyrics,
  addToPlaylist,
  getTrackFromPlaylist,
  getFeaturedPlaylists
};
