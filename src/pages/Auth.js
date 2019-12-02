import React from "react";
import { Button } from "semantic-ui-react";

const Auth = () => {
  return (
    <Button
      onClick={() => (window.location = "http://localhost:3001/spotify/login")}
    >
      SPOTIFY
    </Button>
  );
};

export default Auth;
