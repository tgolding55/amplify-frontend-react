import React  from "react";
import SongCard from "../components/SongCard";
import PlaylistForm from '../components/PlaylistForm'

import { Card, Button } from "semantic-ui-react";

const PlaylistContainer = ({ currentPlaylist, setCurrentSong,removeSongFromPlaylist }) => {
  return (
    <div>
        <PlaylistForm />
    
      <Card.Group centered={true} doubling={true}>
        {currentPlaylist.songs.map((song, index) => (
            <>
          <SongCard
            key={index + song.id}
            {...song}
            handleClick={setCurrentSong}

          />
          < Button negative
                  key={index}
                  onClick= {()=> removeSongFromPlaylist(song)}
     >Remove</Button>
       </> ))}
      </Card.Group>
      
              </div>
    
  );
};

export default PlaylistContainer;
