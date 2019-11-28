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
      <input
        type="text"
        name="name"
        value={inputField}
        onChange={e => setInputField(e.target.value)}
        placeholder="Search Spotify"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SearchBar;
