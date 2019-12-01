import React, { useState } from "react";
import API from "../adapters/API";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

//massive refactor needed here
const Auth = ({ setUser }) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [spotifyAuth, setSpotifyAuth] = useState(null);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleLogin = e => {
    e.preventDefault();
    API.login({ username: loginUsername, password: loginPassword })
      .then(user => {
        setUser(user);
        history.push("/");
      })
      .catch(errors => {
        setErrors(errors);
        setLoginPassword("");
      });
  };

  const handleSignup = e => {
    e.preventDefault();
    API.signup({ username: signupUsername, password: signupPassword })
      .then(user => {
        setUser(user);
        history.push("/");
      })
      .catch(errors => {
        setErrors(errors);
        setSignupPassword("");
      });
  };

  return (
    <>
      {errors.join()}
      <label>
        login
        <form onSubmit={e => handleLogin(e)}>
          <input
            type="text"
            placeholder="Username"
            value={loginUsername}
            onChange={e => setLoginUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)}
          />
          <input type="submit" />
        </form>
      </label>

      <label>
        Signup
        <form onSubmit={e => handleSignup(e)}>
          <input
            type="text"
            placeholder="Username"
            value={signupUsername}
            onChange={e => setSignupUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={signupPassword}
            onChange={e => setSignupPassword(e.target.value)}
          />
          <input type="submit" />
        </form>
        <Button href="http://localhost:3001/auth/spotify">SPOTIFY</Button>
      </label>
    </>
  );
};

export default Auth;
