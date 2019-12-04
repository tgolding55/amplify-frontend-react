import React from "react";
import { Button } from "semantic-ui-react";
import logo from './logo.png'



const Auth = () => {
  return (
    <div id="auth">

      <div id="header">
        {/* <div class="logo"></div> */}
      </div>
      <div id="main">
      <img src={logo} alt='pic' width='300px'/>
  
        <Button
          onClick={() =>
            (window.location = "http://localhost:3001/spotify/login")
          }
        >
          Login With Spotify
        </Button>
      </div>
    </div>
  );
};

export default Auth;

