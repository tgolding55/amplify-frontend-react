import React from "react";
import SongCard from "../components/SongCard";
import SearchBar from "../components/SearchBar";

const ShowContainer = ({ songs, makeQuery, addSongToQueue }) => {
  return (
    <div>
      <SearchBar handleSubmit={makeQuery} />
      {songs.map(song => (
        <SongCard key={song.id} {...song} handleClick={addSongToQueue} />
      ))}
    </div>
  );
};

export default ShowContainer;
