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
  clickEvents: { handleClick },
  actionButton
}) => {
  return (
    <div className="card">
      <Card onClick={() => handleClick(uri, band, name)}>
        <Image src={image} wrapped ui={false}></Image>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{band}</Card.Description>
          <Card.Meta>
            {humanizeDuration(Math.round(duration / 1000) * 1000)}
          </Card.Meta>
          {actionButton}
        </Card.Content>
      </Card>
    </div>
  );
};

export default SongCard;
