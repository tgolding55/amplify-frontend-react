import React, { useState } from "react";
import API from "../adapters/API";
import { useHistory } from "react-router-dom";

const Auth = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    API.login({ username, password })
      .then(user => {
        setUser(user);
        history.push("/");
      })
      .catch(errors => {
        setErrors(errors);
        setPassword("");
      });
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      {errors.join()}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default Auth;
