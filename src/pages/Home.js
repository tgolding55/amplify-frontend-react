import React, { useEffect, useState } from "react";
import SpotifyLogin from "react-spotify-login";
import { clientId, redirectUri } from "../settings";
import API from "../adapters/API";
import ShowContainer from "../containers/ShowContainer";
import PlaylistContainer from "../containers/PlaylistContainer";
import Player from "../components/Player";
import { Grid } from "semantic-ui-react";

const Home = () => {
  const initialSetup = () => {
    makeQuery();
  };

  const makeQuery = (query = "pompeii") => {
    API.fetchSongQuery(query).then(songs => setSongs(songs));
  };

  const [songs, setSongs] = useState([]);
  const [currentSongId, setCurrentSongId] = useState("");
  const [currentPlaylist, setCurrentPlaylist] = useState({
    name: "",
    songs: []
  });

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

  const onFailure = () => {
    console.log("FAILURE");
  };

  const onSuccess = successObj => {
    console.log("SUCCESS: " + successObj["access_token"]);
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
        <Grid.Column>
          <SpotifyLogin
            scope="user-top-read"
            clientId={clientId}
            redirectUri={redirectUri}
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column floated="left" width={3}></Grid.Column>
        <Grid.Column verticalAlign="middle" width={10}>
          <ShowContainer
            songs={songs}
            makeQuery={makeQuery}
            setCurrentSong={setCurrentSong}
            addSongToPlaylist={addSongToPlaylist}
          />
        </Grid.Column>
        <Grid.Column floated="right" width={3}>
          <PlaylistContainer
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
