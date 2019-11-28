import React, { useEffect, useState } from "react";
import SpotifyLogin from "react-spotify-login";
import { clientId, redirectUri } from "./settings";
import "./App.css";
import API from "./adapters/API";
import ShowContainer from "./containers/ShowContainer";
import Player from "./components/Player";

function App() {
  const initialSetup = () => {
    makeQuery();
  };

  const makeQuery = (query = "pompeii") => {
    API.fetchSongQuery(query).then(songs => setSongs(songs));
  };

  const [songs, setSongs] = useState([]);
  const [songQueue, setSongQueue] = useState([]);
  const [currentSongId, setCurrentSongId] = useState("");

  const onFailure = () => {
    console.log("FAILURE");
  };

  const onSuccess = () => {
    console.log("SUCCESS");
  };

  const addSongToQueue = songId => {
    setSongQueue([...songQueue, songId]);
  };

  const updateCurrentSong = () => {
    setCurrentSongId(songQueue[0]);
  };

  useEffect(updateCurrentSong, [songQueue]);

  useEffect(initialSetup, []);

  return (
    <div className="App">
      <Player id={currentSongId} />
      <SpotifyLogin
        clientId={clientId}
        redirectUri={redirectUri}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
      <ShowContainer
        songs={songs}
        makeQuery={makeQuery}
        addSongToQueue={addSongToQueue}
      />
    </div>
  );
}

export default App;
