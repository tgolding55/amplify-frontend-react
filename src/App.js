import React, { useEffect, useState } from "react";
import SpotifyLogin from "react-spotify-login";
import { clientId, redirectUri } from "./settings";
import "./App.css";
import API from "./adapters/API";
import ShowContainer from "./containers/ShowContainer";
import PlaylistContainer from './containers/PlaylistContainer';
import Player from "./components/Player";

function App() {
  const initialSetup = () => {
    makeQuery();
  };

  const makeQuery = (query = "pompeii") => {
    API.fetchSongQuery(query).then(songs => setSongs(songs));
  };

  const [songs, setSongs] = useState([]);
  const [currentSongId, setCurrentSongId] = useState("");
  const [currentPlaylist, setCurrentPlaylist] = useState({name: "", songs: []});

  
  const addSongToPlaylist = (songId) => {
    setCurrentPlaylist({name:currentPlaylist.name, songs: [...currentPlaylist.songs, songId]})
  }




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
        setCurrentSong={setCurrentSong}
        addSongToPlaylist = {addSongToPlaylist}
      />

      <PlaylistContainer 
       currentPlaylist= {currentPlaylist}
       
       />
    </div>
  );
}

export default App;
