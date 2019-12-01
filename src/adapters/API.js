const API_ENDPOINT = "http://localhost:3001/";
const SONG_QUERY = API_ENDPOINT + "songs/q/";
const VALIDATE_URL = API_ENDPOINT + "validate";
const LOGIN_URL = API_ENDPOINT + "login";
const SIGNUP_URL = API_ENDPOINT + "users";

const jsonify = resp => {
  return resp.json().then(data => {
    if (data.errors) throw data.errors;
    else return data;
  });
};

const login = userDetails =>
  fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: userDetails })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });

const signup = userDetails =>
  fetch(SIGNUP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({ user: userDetails })
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });

const fetchSongQuery = query => fetch(SONG_QUERY + query).then(jsonify);

const validate = () =>
  fetch(VALIDATE_URL, {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  })
    .then(jsonify)
    .then(data => {
      localStorage.setItem("token", data.token);
      return data.user;
    });

// const fetchTopSongs = auth => {
//   const authorization = "Bearer " + auth;
//   const spotifyConfigObj = {
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: authorization
//     }
//   };

//   return fetch(
//     "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
//     spotifyConfigObj
//   ).then(resp => resp.json());
// };

export default {
  fetchSongQuery,
  login,
  validate,
  signup
};
