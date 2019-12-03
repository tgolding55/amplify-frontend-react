import React, { useEffect, useState } from "react";
import API from "../adapters/API";
import ShowContainer from "../containers/ShowContainer";
import CurrentPlaylistContainer from "../containers/CurrentPlaylistContainer";
import Player from "../components/Player";
import { Grid, Card} from "semantic-ui-react";
import SearchBar from "../components/SearchBar";
import SongCard from "../components/SongCard";
import PlaylistCard from "../components/PlaylistCard";

const Home = ({ accessToken }) => {
  const initialSetup = () => {
    topSongs();
    getPlaylists();
  };

  const getPlaylists = () =>
    API.getPlaylists(accessToken).then(newPlaylists =>
      setPlaylists(newPlaylists)
    );

  const topSongs = () =>
    API.getTopTracks(accessToken).then(songs => {
      setSongs(songs);
    });

  const makeQuery = (query = "pompeii") => {
    setRadioField("search");
    API.fetchSongQuery(query, accessToken).then(songs => setSongs(songs));
  };

  const [songs, setSongs] = useState([]);
  const [playingURI, setPlayingURI] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState({
    name: "",
    songs: []
  });
  const [radioField, setRadioField] = useState("TopTracks");
  const [loadingLyrics, setLoadingLyrics] = useState(false);
  const [lyrics, setLyrics] = useState("");

  const addSongToPlaylist = song => {
    setCurrentPlaylist({
      name: currentPlaylist.name,
      songs: [...currentPlaylist.songs, song]
    });
  };

  const removeSongFromPlaylist = songToRemove => {
    setCurrentPlaylist({
      name: currentPlaylist.name,
      songs: currentPlaylist.songs.filter(song => song !== songToRemove)
    });
  };

  const setPlayer = (URI, band, track) => {
    setPlayingURI(URI);
    if (band && track) {
      setLoadingLyrics(true);
      API.fetchLyrics(band, track).then(lyrics => {
        setLyrics(
          lyrics.result ? lyrics.result.track.text : "Lyrics Not Found!"
        );
        setLoadingLyrics(false);
      });
    } else {
      setLyrics("");
    }
  };
  const resetTopTracks = () => {
    if (radioField === "TopTracks") topSongs();
  };

  const newPlaylist = (name, description, publicOrPrivate) => {
    API.postPlaylist(
      accessToken,
      name,
      description,
      publicOrPrivate
    ).then(playlist => setPlaylists([...playlists, playlist]));
  };

  useEffect(resetTopTracks, [radioField]);

  useEffect(initialSetup, []);

  return (
    <Grid stackable column={3}>
      <Grid.Row>
        <Grid.Column>
          <Player uri={playingURI} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column floated="left" width={3}>
          {!loadingLyrics ? <Card extra={lyrics}  />: "Loading Lyrics"}
        </Grid.Column>
        <Grid.Column verticalAlign="middle" width={10}>
          <SearchBar
            key="searchBar"
            handleSubmit={makeQuery}
            radioField={radioField}
            setRadioField={setRadioField}
          />
          <br></br>

          <Grid.Row>
            {radioField === "Playlists" ? (
              <ShowContainer
                items={playlists}
                Component={PlaylistCard}
                clickEvents={{ handleClick: setPlayer }}
              />
            ) : (
              <ShowContainer
                items={songs}
                clickEvents={{
                  handleClick: setPlayer,
                  handleAddSong: addSongToPlaylist
                }}
                Component={SongCard}
              />
            )}
          </Grid.Row>
        </Grid.Column>
        <Grid.Column floated="right" width={3}>
          <CurrentPlaylistContainer
            currentPlaylist={currentPlaylist}
            setCurrentSong={setPlayer}
            removeSongFromPlaylist={removeSongFromPlaylist}
            newPlaylist={newPlaylist}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
