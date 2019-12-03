const API_ENDPOINT = "http://localhost:3001/";
const SPOTIFY_ENDPOINT = API_ENDPOINT + "spotify/";
const SONG_QUERY = SPOTIFY_ENDPOINT + "search";
const PLAYLIST_ENDPOINT = SPOTIFY_ENDPOINT + "playlists";
const TOPTRACKS_ENDPOINT = SPOTIFY_ENDPOINT + "toptracks";

const jsonify = resp => resp.json();

const fetchSongQuery = (query, accessToken) =>
  fetch(SONG_QUERY + "?search=" + query + "&auth=" + accessToken).then(jsonify);

const getPlaylists = accessToken =>
  fetch(PLAYLIST_ENDPOINT + "?auth=" + accessToken).then(jsonify);

const getTopTracks = accessToken =>
  fetch(TOPTRACKS_ENDPOINT + "?auth=" + accessToken).then(jsonify);

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

export default {
  fetchSongQuery,
  getPlaylists,
  getTopTracks,
  postPlaylist
};
