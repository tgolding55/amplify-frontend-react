import React from "react";

import { Card, Grid } from "semantic-ui-react";

const ShowContainer = ({ items, clickEvents, Component }) => {
  return (    
    <Card.Group
      centered={true}
      doubling={true}
      textAlign="center"
      stackable={true}
    >
      {items.map((item, index) => (
        <div key={index + "div"}>
          <Component
            key={index + item.id}
            {...item}
            clickEvents={clickEvents}
          />
        </div>
      ))}
    </Card.Group>
  );
};

export default ShowContainer;
