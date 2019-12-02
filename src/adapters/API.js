const API_ENDPOINT = "http://localhost:3001/";
const SPOTIFY_ENDPOINT = API_ENDPOINT + "spotify/";
const SONG_QUERY = SPOTIFY_ENDPOINT + "q";
const PLAYLIST_ENDPOINT = SPOTIFY_ENDPOINT + 'getPlaylists';

const jsonify = resp => resp.json();

const fetchSongQuery = (query, accessToken) =>
  fetch(SONG_QUERY + "?search=" + query + "&auth=" + accessToken).then(jsonify);

  const getPlaylists = (accessToken) => 
  fetch(PLAYLIST_ENDPOINT + "?auth=" + accessToken).then(jsonify)


export default {
  fetchSongQuery,
  getPlaylists
};
