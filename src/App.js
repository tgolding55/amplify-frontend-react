import React, { useEffect, useState } from "react";
import SpotifyLogin from "react-spotify-login";
import { clientId, redirectUri } from "./settings";
import "./App.css";
import API from "./adapters/API";
import ShowContainer from "./containers/ShowContainer";
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
          <Grid.Column verticalAlign="middle">
            <ShowContainer
              songs={songs}
              makeQuery={makeQuery}
              setCurrentSong={setCurrentSong}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
