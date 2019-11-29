import React from "react";
import { Card } from "semantic-ui-react";

const SongCard = ({ id, handleClick }) => {
  return <Card header={id} onClick={e => handleClick(id)} />
  
};

export default SongCard;

/*
    <div  width="300" height="380">
      {id}
    </div>
*/
