import React from "react";
import { Button } from "semantic-ui-react";

const Auth = () => {
  return (
    <div id="auth">
      <div id="header">
        <div class="logo"></div>
      </div>
      <div id="main">
        <Button
          onClick={() =>
            (window.location =
              "https://amplify-backend.herokuapp.com/spotify/login")
          }
        >
          Login With Spotify
        </Button>
      </div>
    </div>
  );
};

export default Auth;
