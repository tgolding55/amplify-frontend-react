import React from "react";
import SongCard from "../components/SongCard";
import PlaylistForm from "../components/PlaylistForm";

import { Card, Button } from "semantic-ui-react";

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
    <div>
      <PlaylistForm
        key={"NewPlaylistForm"}
        newPlaylist={newPlaylist}
        setCurrentPlaylist={setCurrentPlaylist}
        currentPlaylist={currentPlaylist}
        playlists={playlists}
        setSongsToAdd={setSongsToAdd}
        addToPlaylist={addToPlaylist}
      />

      <Card.Group key={"SongsToAddCardGroup"} centered={true} doubling={true}>
        {songsToAdd.map((song, index) => (
          <SongCard
            key={index + song.id + "songToAdd"}
            {...song}
            clickEvents={{
              handleClick: setPlayer,
              actionSong: removeSongFromPlaylist
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
    </div>
  );
};

export default CurrentPlaylistContainer;
