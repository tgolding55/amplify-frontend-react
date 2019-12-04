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
    <div className="card">
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
      />
    </div>
  );
};

export default PlaylistCard;
