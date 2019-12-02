import React from "react";

import { Card, Grid } from "semantic-ui-react";

const ShowContainer = ({ items, clickEvents, Component }) => {
  return (
    <div>
      <Grid>
        <Grid.Row>
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
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ShowContainer;
