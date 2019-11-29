import React from "react";
import SongCard from "../components/SongCard";
import { Card } from "semantic-ui-react";

const PlaylistContainer = ({ currentPlaylist, setCurrentSong }) => {
  return (
    <div>
      <Card.Group centered="true" doubling>
        {currentPlaylist.songs.map(song => (
          <SongCard key={song.id} {...song} handleClick={setCurrentSong} />
        ))}
      </Card.Group>
    </div>
  );
};

export default PlaylistContainer;
