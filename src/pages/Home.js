import React, { useEffect, useState, createRef } from "react";
import API from "../adapters/API";
import ShowContainer from "../containers/ShowContainer";
import CurrentPlaylistContainer from "../containers/CurrentPlaylistContainer";
import Player from "../components/Player";
import { Grid, Card, Sticky, Ref, Loader } from "semantic-ui-react";
import SearchBar from "../components/SearchBar";
import SongCard from "../components/SongCard";
import PlaylistCard from "../components/PlaylistCard";

const Home = ({ accessToken }) => {
  const [songs, setSongs] = useState([]);
  const [loadingContent, setLoadingContent] = useState(false);
  const [playingURI, setPlayingURI] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [radioField, setRadioField] = useState("TopTracks");
  const [topTracksTimeFrame, setTopTracksTimeFrame] = useState("long_term");
  const [loadingLyrics, setLoadingLyrics] = useState(false);
  const [lyrics, setLyrics] = useState("");
  const [songsToAdd, setSongsToAdd] = useState([]);
  const [currentPlaylist, setCurrentPlaylist] = useState({});

  const initialSetup = () => {
    setLoadingContent(true);
    topSongs();
    getPlaylists();
  };

  const getPlaylists = () => {
    setLoadingContent(true);
    API.getPlaylists(accessToken).then(newPlaylists => {
      setPlaylists(newPlaylists);
      setLoadingContent(false);
    });
  };

  const topSongs = () => {
    setLoadingContent(true);
    API.getTopTracks(accessToken, topTracksTimeFrame).then(songs => {
      setSongs(songs);
      setLoadingContent(false);
    });
  };

  const makeQuery = query => {
    setLoadingContent(true);
    setRadioField("search");
    API.fetchSongQuery(query, accessToken).then(songs => {
      setSongs(songs);
      setLoadingContent(false);
    });
  };

  const getPlaylist = playlistId => {
    setLoadingContent(true);
    setRadioField("search");
    API.getTrackFromPlaylist(accessToken, playlistId).then(songs => {
      setSongs(songs);
      setLoadingContent(false);
    });
  };

  const addToPlaylist = () => {
    API.addToPlaylist(
      accessToken,
      currentPlaylist.id,
      songsToAdd.map(song => song.uri)
    ).then(getPlaylists);
  };

  const addSongToPlaylist = songId =>
    setSongsToAdd([...songsToAdd, songs.find(song => song.id === songId)]);

  const removeSongFromPlaylist = songIndex =>
    setSongsToAdd(songsToAdd.filter((song, index) => index !== songIndex));

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
  useEffect(topSongs, [topTracksTimeFrame]);

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
              <Card
                extra={!loadingLyrics ? lyrics : <Loader active inline />}
              />
            </div>
          </Grid.Column>
          <Grid.Column verticalAlign="middle" width={10}>
            <SearchBar
              key="searchBar"
              handleSubmit={makeQuery}
              radioField={radioField}
              setRadioField={setRadioField}
              setTopTracksTimeFrame={setTopTracksTimeFrame}
              topTracksTimeFrame={topTracksTimeFrame}
            />
            <br></br>

            <Grid.Row>
              {!loadingContent ? (
                radioField === "Playlists" ? (
                  <ShowContainer
                    items={playlists}
                    Component={PlaylistCard}
                    clickEvents={{
                      handleClick: setPlayer,
                      actionSong: getPlaylist
                    }}
                    buttonText="View Playlist"
                  />
                ) : (
                  <ShowContainer
                    items={songs}
                    clickEvents={{
                      handleClick: setPlayer,
                      actionSong: addSongToPlaylist
                    }}
                    Component={SongCard}
                    buttonText="Add"
                  />
                )
              ) : (
                <Loader active inline />
              )}
            </Grid.Row>
          </Grid.Column>
          <Grid.Column floated="right" width={3}>
            <CurrentPlaylistContainer
              songsToAdd={songsToAdd}
              setPlayer={setPlayer}
              removeSongFromPlaylist={removeSongFromPlaylist}
              newPlaylist={newPlaylist}
              currentPlaylist={currentPlaylist}
              setCurrentPlaylist={setCurrentPlaylist}
              playlists={playlists}
              setSongsToAdd={setSongsToAdd}
              addToPlaylist={addToPlaylist}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Ref>
  );
};

export default Home;
