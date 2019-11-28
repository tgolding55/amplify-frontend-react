import React, { useEffect, useState } from "react";
import SpotifyLogin from "react-spotify-login";
import { clientId, redirectUri } from "./settings";
import "./App.css";
import API from "./adapters/API";
import ShowContainer from "./containers/ShowContainer";

function App() {
  const makeQuery = (query = "pompeii") => {
    API.fetchSongQuery(query).then(songs => setSongs(songs));
  };

  const [songs, setSongs] = useState([]);

  const onFailure = () => {
    console.log("FAILURE");
  };

  const onSuccess = () => {
    console.log("SUCCESS");
  };

  useEffect(makeQuery, []);

  return (
    <div className="App">
      <SpotifyLogin
        clientId={clientId}
        redirectUri={redirectUri}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <ShowContainer songs={songs} makeQuery={makeQuery} />
    </div>
  );
}

export default App;
