import React from "react";
import { Card } from "semantic-ui-react";

const PlaylistCard = ({
  image,
  uri,
  name,
  trackNum,
  description,
  clickEvents: { handleClick }
}) => {
  return (
    <Card
      header={name}
      image={
        image
          ? image.url
          : "https://cdn.ebaumsworld.com/mediaFiles/picture/718392/84717656.jpg"
      }
      description={description}
      extra={trackNum + " songs"}
      onClick={() => handleClick(uri)}
      border={1}
    />
  );
};

export default PlaylistCard;
