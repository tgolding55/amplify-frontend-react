import React from "react";
import SongCard from "../components/SongCard";

const ShowContainer = ({ songs }) => {
  console.log(songs);
  return (
    <div>
      {songs.map(song => (
        <SongCard {...song} />
      ))}
    </div>
  );
};

export default ShowContainer;
