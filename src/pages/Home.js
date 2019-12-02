import React, { useEffect, useState } from "react";
import API from "../adapters/API";
import ShowContainer from "../containers/ShowContainer";
import CurrentPlaylistContainer from "../containers/CurrentPlaylistContainer";
import Player from "../components/Player";
import { Grid } from "semantic-ui-react";
import SearchBar from "../components/SearchBar";
import PlaylistsContainer from "../containers/PlaylistsContainer";

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
    API.getTopTracks(accessToken).then(songs => setSongs(songs));

  const makeQuery = (query = "pompeii") => {
    API.fetchSongQuery(query, accessToken).then(songs => setSongs(songs));
  };

  const [songs, setSongs] = useState([]);
  const [currentSongId, setCurrentSongId] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState({
    name: "",
    songs: []
  });
  const [radioField, setRadioField] = useState("TopTracks");

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

  const setCurrentSong = songId => {
    setCurrentSongId(songId);
  };

  useEffect(initialSetup, []);

  return (
    <Grid stackable column={3}>
      <Grid.Row>
        <Grid.Column>
          <Player id={currentSongId} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column floated="left" width={3}></Grid.Column>
        <Grid.Column verticalAlign="middle" width={10}>
          <SearchBar
            key="searchBar"
            handleSubmit={makeQuery}
            radioField={radioField}
            setRadioField={setRadioField}
          />

          {radioField === "TopTracks" ? (
            <ShowContainer
              songs={songs}
              setCurrentSong={setCurrentSong}
              addSongToPlaylist={addSongToPlaylist}
            />
          ) : (
            <PlaylistsContainer playlists={playlists} />
          )}
        </Grid.Column>
        <Grid.Column floated="right" width={3}>
          <CurrentPlaylistContainer
            currentPlaylist={currentPlaylist}
            setCurrentSong={setCurrentSong}
            removeSongFromPlaylist={removeSongFromPlaylist}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Home;
