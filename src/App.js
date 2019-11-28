import React, { useEffect, useState, Fragment } from "react";
import SpotifyLogin from "react-spotify-login";
import { clientId, redirectUri } from "./settings";
import "./App.css";
import API from "./adapters/API";
import ShowContainer from "./containers/ShowContainer";

function App() {
  const makeQuery = () => {
    API.fetchSongQuery().then(songs => setSongs(songs));
  };

  const [songs, setSongs] = useState([]);
  const [spotifySignIn, setSpotifySignIn] = useState(false);

  const onFailure = () => {
    console.log("FAILURE");
  };

  const onSuccess = () => {
    console.log("SUCCESS");
    setSpotifySignIn(true);
  };

  useEffect(makeQuery, []);

  return (
    <div className="App">
      {!spotifySignIn ? (
        <Fragment>
          <SpotifyLogin
            clientId={clientId}
            redirectUri={redirectUri}
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
          <ShowContainer songs={songs} />
        </Fragment>
      ) : (
        <ShowContainer songs={songs} />
      )}
    </div>
  );
}

export default App;
