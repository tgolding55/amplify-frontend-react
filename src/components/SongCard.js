import React from "react";

const SongCard = ({ id }) => {
  return (
    <iframe
      src={"https://open.spotify.com/embed/track/" + id}
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
};

export default SongCard;
