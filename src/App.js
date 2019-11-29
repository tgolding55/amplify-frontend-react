import React, { useEffect, useState } from "react";
import SpotifyLogin from "react-spotify-login";
import { clientId, redirectUri } from "./settings";
import "./App.css";
import API from "./adapters/API";
import ShowContainer from "./containers/ShowContainer";
import PlaylistContainer from "./containers/PlaylistContainer";
import Player from "./components/Player";
import { Grid } from "semantic-ui-react";

function App() {
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

  const onFailure = () => {
    console.log("FAILURE");
  };

  const onSuccess = () => {
    console.log("SUCCESS");
  };

  const setCurrentSong = songId => {
    setCurrentSongId(songId);
  };

  useEffect(initialSetup, []);

  return (
    <div className="App">
      <Grid stackable column={3}>
        <Grid.Row>
          <Grid.Column>
            <Player id={currentSongId} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <SpotifyLogin
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
            <PlaylistContainer currentPlaylist={currentPlaylist} setCurrentSong={setCurrentSong} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
