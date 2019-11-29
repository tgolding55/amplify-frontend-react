import React from "react";
import { Card } from "semantic-ui-react";

const SongCard = ({ id, name, image, band, duration, handleClick}) => {
  return (
    <Card
      header={name}
      image={image}
      description={band}
      extra={`${Math.floor(duration / 1000)} seconds`}
      onClick={e => handleClick(id)}
      border={1}
  />
    
  );
};

export default SongCard;
