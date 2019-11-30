import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import PATHS from "./paths";
import API from "./adapters/API";

function App({ history }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.validate()
      .then(user => {
        setUser(user);
        history.push(PATHS.HOME);
      })
      .catch(() => history.push(PATHS.AUTH));
  }, []);

  return (
    <div className="App">
      <Route
        path={PATHS.AUTH}
        component={routerProps => <Auth {...routerProps} setUser={setUser} />}
      />

      {user ? (
        <Route exact path={PATHS.HOME} component={Home} />
      ) : (
        <Redirect to={PATHS.AUTH} />
      )}
    </div>
  );
}

export default App;
