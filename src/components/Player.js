import React from "react";

const Player = ({ id }) => {
  return (
    <iframe
      title="Player"
      src={"https://open.spotify.com/embed/track/" + id}
      width="100%"
      height="80"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
};

export default Player;
