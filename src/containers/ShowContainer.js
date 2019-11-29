import React from "react";
import SongCard from "../components/SongCard";
import SearchBar from "../components/SearchBar";
import { Card, Grid } from "semantic-ui-react";

const ShowContainer = ({
  songs,
  makeQuery,
  setCurrentSong,
  addSongToPlaylist
}) => {
  return (
    <div>
      <Grid>
        <Grid.Row centered>
          <SearchBar handleSubmit={makeQuery} />
        </Grid.Row>
        <Grid.Row>
          <Card.Group centered="true" doubling>
            {songs.map(song => (
              <>
                <SongCard
                  key={song.id}
                  {...song}
                  handleClick={setCurrentSong}
                />
                <button onClick={() => addSongToPlaylist(song)}></button>
              </>
            ))}
          </Card.Group>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ShowContainer;
