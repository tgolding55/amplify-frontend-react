import React from "react";

const Player = ({ uri }) => {
  const [, type, id] = uri.length ? uri.split(":") : "";
  return (
    <iframe
      className="ui sticky"
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
