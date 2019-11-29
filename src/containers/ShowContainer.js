import React from "react";
import SongCard from "../components/SongCard";
import SearchBar from "../components/SearchBar";
import { Card, Grid, Button } from "semantic-ui-react";

const ShowContainer = ({
  songs,
  makeQuery,
  setCurrentSong,
  addSongToPlaylist
}) => {
  return (
    <div>
      <Grid>
        <Grid.Row centered={true}>
          <SearchBar key="searchBar" handleSubmit={makeQuery} />
        </Grid.Row>
        <Grid.Row>
          <Card.Group
            centered={true}
            doubling={true}
            textAlign="center"
            stackable={true}
          >
            {songs.map((song, index) => (
              <div key={index + "div"}>
                <SongCard
                  key={index + song.id}
                  {...song}
                  handleClick={setCurrentSong}
                />
                < Button positive
                  key={index}
                  onClick={() => addSongToPlaylist(song)}
                >Add</Button>
              </div>
            ))}
          </Card.Group>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ShowContainer;
