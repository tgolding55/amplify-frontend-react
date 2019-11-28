import React from "react";

const SongCard = ({ id, handleClick }) => {
  return (
    <div onClick={e => handleClick(id)} width="300" height="380">
      {id}
    </div>
  );
};

export default SongCard;
