import React from "react";
import { Card } from "semantic-ui-react";

const PlaylistCard = ({ image, name, trackNum, description }) => {
  console.log(image);
  return (
    <Card
      header={name}
      image={
        image.url
          ? image.url
          : "https://cdn.ebaumsworld.com/mediaFiles/picture/718392/84717656.jpg"
      }
      description={description}
      extra={trackNum + " songs"}
      border={1}
    />
  );
};

export default PlaylistCard;
