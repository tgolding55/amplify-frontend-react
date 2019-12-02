import React, { useState } from "react";
import {Radio} from 'semantic-ui-react'
const SearchBar = ({ handleSubmit, radioField, setRadioField}) => {
const [inputField, setInputField] = useState("");

  return (
    <>
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
      <Radio 
      label='Playlists'
       name ='radioGroup'
        value='Playlists'
        checked ={radioField ==='Playlists'}onChange={(e) => {setRadioField(e.target.value)}} >

      </Radio>
      </>

  );
};

export default SearchBar;
