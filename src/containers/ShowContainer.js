import React from "react";

import { Card, Button } from "semantic-ui-react";

const ShowContainer = ({ items, clickEvents, Component, buttonText }) => {
  return (
    <div className="show">
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
            actionButton={
              <Button
                positive
                key={item.id + Math.random()}
                onClick={() => clickEvents.actionSong(item.id)}
              >
                {buttonText}
              </Button>
            }
          />
        </div>
      ))}
    </Card.Group>
    </div>
  );
};

export default ShowContainer;
