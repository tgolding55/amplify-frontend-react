const URL = 'http://localhost:3001/'
const SONG_QUERY = URL + 'songs/q/'

const fetchSongQuery = () => (
   fetch(SONG_QUERY + 'pompeii')
    .then(res => res.json())
)


export default { 
    fetchSongQuery
}