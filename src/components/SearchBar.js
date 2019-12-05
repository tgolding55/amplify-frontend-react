import React, { useState } from "react";
import { Radio, Dropdown, Menu } from "semantic-ui-react";
const SearchBar = ({
  handleSubmit,
  radioField,
  setRadioField,
  setTopTracksTimeFrame,
  topTracksTimeFrame
}) => {
  const [inputField, setInputField] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(inputField);
        setInputField("");
      }}
    >
      <div className="ui search">
        <Menu>
          <Menu.Item
            name="TopTracks"
            active={radioField === "TopTracks"}
            onClick={e => {
              setRadioField(e.target.innerText);
            }}
          >
            TopTracks
          </Menu.Item>
          <Menu.Item
            name="Playlists"
            active={radioField === "Playlists"}
            onClick={e => {
              setRadioField(e.target.innerText);
            }}
          >
            Playlists
          </Menu.Item>
          <div style={{ width: "100%" }}></div>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              name="name"
              value={inputField}
              onChange={e => setInputField(e.target.value)}
              placeholder="Search Spotify"
            />
            <i className="search icon" />
          </div>
        </Menu>

        {radioField === "TopTracks" && (
          <Dropdown
            fluid
            selection
            value={topTracksTimeFrame}
            options={[
              {
                key: "long_term",
                text: "Most Played All Time",
                value: "long_term"
              },
              {
                key: "medium_term",
                text: "Most Played Recently",
                value: "medium_term"
              },
              {
                key: "short_term",
                text: "Most Played Very Recently",
                value: "short_term"
              }
            ]}
            onChange={(e, { value }) => setTopTracksTimeFrame(value)}
          ></Dropdown>
        )}
      </div>
    </form>
  );
};

export default SearchBar;
