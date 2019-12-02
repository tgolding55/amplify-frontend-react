import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import PATHS from "./paths";
import queryString from "querystring";

function App() {
  const [accessToken, setAccessToken] = useState(null);

  return (
    <div className="App">
      <Route
        exact
        path={PATHS.HOME}
        component={() =>
          accessToken ? (
            <Home accessToken={accessToken} />
          ) : (
            <Redirect to={PATHS.AUTH} />
          )
        }
      />
      <Route
        path={PATHS.AUTH}
        component={routerProps => <Auth {...routerProps} />}
      />
      <Route
        path={PATHS.AUTHRESPONSE}
        component={() => {
          setAccessToken(
            queryString.parse(window.location.search)["?access_token"]
          );
          return <Redirect to={PATHS.HOME} />;
        }}
      />
    </div>
  );
}

export default App;
