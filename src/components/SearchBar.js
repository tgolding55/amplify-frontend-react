import React, { useState } from "react";
import { Radio, Dropdown } from "semantic-ui-react";
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
        <Radio
          label="Playlists"
          name="radioGroup"
          value="Playlists"
          checked={radioField === "Playlists"}
          onChange={e => {
            setRadioField(e.target.innerText);
          }}
        ></Radio>
        <Radio
          label="Top Tracks"
          name="radioGroup"
          value="TopTracks"
          checked={radioField === "TopTracks"}
          onChange={(e, { value }) => {
            setRadioField(value);
          }}
        ></Radio>
        <Dropdown
          fluid
          selection
          value={topTracksTimeFrame}
          options={[
            { key: "long_term", text: "Long Term", value: "long_term" },
            { key: "medium_term", text: "Medium Term", value: "medium_term" },
            { key: "short_term", text: "Short Term", value: "short_term" }
          ]}
          onChange={(e, { value }) => setTopTracksTimeFrame(value)}
        ></Dropdown>
      </div>
    </form>
  );
};

export default SearchBar;
