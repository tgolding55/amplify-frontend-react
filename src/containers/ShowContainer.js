import React from "react";
import SongCard from "../components/SongCard";
import SearchBar from "../components/SearchBar";

const ShowContainer = ({ songs, makeQuery }) => {
  console.log(songs);
  return (
    <div>
      <SearchBar handleSubmit={makeQuery} />
      {songs.map(song => (
        <SongCard {...song} />
      ))}
    </div>
  );
};

export default ShowContainer;
