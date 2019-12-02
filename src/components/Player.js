import React from "react";

const Player = ({ uri }) => {
  console.log(uri);
  const [spotify, type, id] = uri.length ? uri.split(":") : "";
  return (
    <iframe
      title="Player"
      src={"https://open.spotify.com/embed/" + type + "/" + id}
      width="100%"
      height="80"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  );
};

export default Player;
