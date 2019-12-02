import React from "react";
import PlaylistCard from "../components/PlaylistCard";

const PlaylistsContainer = ({ playlists }) => {
  return playlists.map(playlist => <PlaylistCard {...playlist} />);
};

export default PlaylistsContainer;
