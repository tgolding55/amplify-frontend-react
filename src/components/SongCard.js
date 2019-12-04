import React from "react";
import { Card, Image } from "semantic-ui-react";
import humanizeDuration from "humanize-duration";

const SongCard = ({
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
      <Card onClick>
        <Image
          src={image}
          className="cardImage"
          wrapped
          fluid
          ui={false}
          onClick={() => handleClick(uri, band, name)}
        ></Image>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{band}</Card.Description>
          <Card.Meta>
            {humanizeDuration(Math.round(duration / 1000) * 1000)}
          </Card.Meta>
        </Card.Content>
        {actionButton}
      </Card>
    </div>
  );
};

export default SongCard;
