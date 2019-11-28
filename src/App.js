import React, {useEffect, useState} from 'react';

import './App.css';
import API from './adapters/API'
import ShowContainer from './containers/ShowContainer'
function App() {

const makeQuery = () => { 
  API.fetchSongQuery()
  .then(songs => setSongs(songs))
}

const [songs, setSongs] = useState([])



useEffect(

makeQuery,

[]);

  return (
    <div className="App">
      <ShowContainer songs = {songs}/>
    </div>
  );
}

export default App;
