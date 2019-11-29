
import React from "react";
import SongCard from "../components/SongCard";

const PlaylistContainer = ({ currentPlaylist}) => {
  return (
    <div>
      {currentPlaylist.songs.map(song => (
        <SongCard key={song.id} id= {song}/>
      ))}
    </div>
  );
};

export default PlaylistContainer;
