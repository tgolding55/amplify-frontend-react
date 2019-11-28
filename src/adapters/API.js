const URL = "http://localhost:3001/";
const SONG_QUERY = URL + "songs/q/";

const fetchSongQuery = query =>
  fetch(SONG_QUERY + query).then(res => res.json());

export default {
  fetchSongQuery
};
