import React from "react";
import { Card, Button } from "semantic-ui-react";

const SongCard = ({
  id,
  uri,
  name,
  image,
  band,
  duration,
  clickEvents: { handleAddSong, handleClick }
}) => {
  return (
    <>
      <Card
        header={name}
        image={image}
        description={band}
        extra={`${Math.floor(duration / 1000)} seconds`}
        onClick={() => handleClick(uri)}
        border={1}
      />
      <Button onClick={() => handleAddSong(id)}></Button>
    </>
  );
};

export default SongCard;
