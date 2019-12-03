import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import humanizeDuration from "humanize-duration";

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
    <div class="card">
      <Card onClick={() => handleClick(uri)}>
        <Image src={image} wrapped ui={false}></Image>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{band}</Card.Description>
          <Card.Meta>
            {humanizeDuration(Math.round(duration / 1000) * 1000)}
          </Card.Meta>
          <Button onClick={() => handleAddSong(id)}></Button>
        </Card.Content>
      </Card>
    </div>
  );
};

export default SongCard;
