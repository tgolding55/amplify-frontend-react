import React, { useEffect, useState, createRef } from "react";
import API from "../adapters/API";
import ShowContainer from "../containers/ShowContainer";
import CurrentPlaylistContainer from "../containers/CurrentPlaylistContainer";
import Player from "../components/Player";
import { Grid, Card, Sticky, Ref } from "semantic-ui-react";
import SearchBar from "../components/SearchBar";
import SongCard from "../components/SongCard";
import PlaylistCard from "../components/PlaylistCard";

const Home = ({ accessToken }) => {
  const initialSetup = () => {
    topSongs();
    getPlaylists();
  };

  const getPlaylists = () =>
    API.getPlaylists(accessToken).then(newPlaylists =>
      setPlaylists(newPlaylists)
    );

  const topSongs = () =>
    API.getTopTracks(accessToken).then(songs => {
      setSongs(songs);
    });

  const makeQuery = (query = "pompeii") => {
    setRadioField("search");
    API.fetchSongQuery(query, accessToken).then(songs => setSongs(songs));
  };

  const [songs, setSongs] = useState([]);
  const [playingURI, setPlayingURI] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [radioField, setRadioField] = useState("TopTracks");
  const [loadingLyrics, setLoadingLyrics] = useState(false);
  const [lyrics, setLyrics] = useState("");
  const [songsToAdd, setSongsToAdd] = useState([]);

  const addSongToPlaylist = songId => {
    setSongsToAdd([...songsToAdd, songs.find(song => song.id === songId)]);
  };

  const removeSongFromPlaylist = songIndex => {
    setSongsToAdd(songsToAdd.filter((song, index) => index !== songIndex));
  };

  const setPlayer = (URI, band, track) => {
    setPlayingURI(URI);
    if (band && track) {
      setLoadingLyrics(true);
      API.fetchLyrics(band, track).then(lyrics => {
        setLyrics(
          lyrics.result ? lyrics.result.track.text : "Lyrics Not Found!"
        );
        setLoadingLyrics(false);
      });
    } else {
      setLyrics("");
    }
  };
  const resetTopTracks = () => {
    if (radioField === "TopTracks") topSongs();
  };

  const newPlaylist = (name, description, publicOrPrivate) => {
    API.postPlaylist(
      accessToken,
      name,
      description,
      publicOrPrivate
    ).then(playlist => setPlaylists([...playlists, playlist]));
  };

  useEffect(resetTopTracks, [radioField]);

  useEffect(initialSetup, []);

  const contextRef = createRef();

  return (
    <Ref innerRef={contextRef}>
      <Grid stackable column={3}>
        <Grid.Row>
          <Grid.Column>
            <Sticky context={contextRef}>
              <Player uri={playingURI} />
            </Sticky>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column floated="left" width={3}>
            <div className="card">
              <Card extra={!loadingLyrics ? lyrics : "Loading Lyrics"} />
            </div>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={10}>
            <SearchBar
              key="searchBar"
              handleSubmit={makeQuery}
              radioField={radioField}
              setRadioField={setRadioField}
            />
            <br></br>

            <Grid.Row>
              {radioField === "Playlists" ? (
                <ShowContainer
                  items={playlists}
                  Component={PlaylistCard}
                  clickEvents={{ handleClick: setPlayer }}
                />
              ) : (
                <ShowContainer
                  items={songs}
                  clickEvents={{
                    handleClick: setPlayer,
                    actionSong: addSongToPlaylist
                  }}
                  Component={SongCard}
                />
              )}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            <CurrentPlaylistContainer
              songsToAdd={songsToAdd}
              setPlayer={setPlayer}
              removeSongFromPlaylist={removeSongFromPlaylist}
              newPlaylist={newPlaylist}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Ref>
  );
};

export default Home;
