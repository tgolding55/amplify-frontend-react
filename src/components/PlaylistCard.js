import React from "react";
import { Card, Image } from "semantic-ui-react";

const PlaylistCard = ({
  image,
  uri,
  name,
  trackNum,
  description,
  clickEvents: { handleClick },
  actionButton
}) => {
  return (
    <div className="card">
      <Card onClick>
        <Image
          src={
            image
              ? image.url
              : "https://cdn.ebaumsworld.com/mediaFiles/picture/718392/84717656.jpg"
          }
          className="cardImage"
          wrapped
          ui={false}
          onClick={() => handleClick(uri)}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
          <Card.Meta>{trackNum + " songs"}</Card.Meta>
        </Card.Content>
        {actionButton}
      </Card>
    </div>
  );
};

export default PlaylistCard;
