import React, { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
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
      </div>
    </form>
  );
};

export default SearchBar;
