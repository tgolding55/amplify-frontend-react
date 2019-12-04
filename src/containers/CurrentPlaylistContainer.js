import React from "react";
import SongCard from "../components/SongCard";
import PlaylistForm from "../components/PlaylistForm";

import { Card, Button, Grid } from "semantic-ui-react";

const CurrentPlaylistContainer = ({
  songsToAdd,
  setPlayer,
  removeSongFromPlaylist,
  newPlaylist,
  currentPlaylist,
  setCurrentPlaylist,
  playlists,
  setSongsToAdd,
  addToPlaylist
}) => {
  return (
    <Grid>
      <Grid.Column>
        <Grid.Row>
          <PlaylistForm
            key={"NewPlaylistForm"}
            newPlaylist={newPlaylist}
            setCurrentPlaylist={setCurrentPlaylist}
            currentPlaylist={currentPlaylist}
            playlists={playlists}
            setSongsToAdd={setSongsToAdd}
            addToPlaylist={addToPlaylist}
          />
        </Grid.Row>

        <Grid.Row>
          <Card>
            <Card.Header>
              Songs To Be Added | {songsToAdd.length}{" "}
              {songsToAdd.length === 1 ? "song" : "songs"}
            </Card.Header>
            <Card.Content>
              <Card.Group key={"SongsToAddCardGroup"} className="playlistShow">
                {songsToAdd.map((song, index) => (
                  <SongCard
                    key={index + song.id + "songToAdd"}
                    {...song}
                    clickEvents={{
                      handleClick: setPlayer
                    }}
                    handleClick={setPlayer}
                    actionButton={
                      <Button
                        negative
                        key={"songToRemove" + index}
                        onClick={() => removeSongFromPlaylist(index)}
                      >
                        Remove
                      </Button>
                    }
                  />
                ))}
              </Card.Group>
            </Card.Content>
          </Card>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
};

export default CurrentPlaylistContainer;
