import React from "react";
import { Card, Image } from "semantic-ui-react";

const PlaylistCard = ({
  image,
  uri,
  name,
  trackNum,
  description,
  clickEvents: { handleClick },
  actionButton,
  fluidbool = false
}) => {
  return (
    <div className="card">
      <Card onClick fluid={fluidbool}>
        <Image
          size="small"
          src={
            image
              ? image.url
              : "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/zrarqnhmkoaihvzss5ek.jpg"
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
