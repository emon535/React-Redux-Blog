import { FETCH_POST, NEW_POST } from "./types";

// create the methods in actions:

export const fetchPost = dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json().then(posts =>
      dispatch({
        type: FETCH_POST,
        payload: posts
      })
    )
  );
};

// return the callback to dispatch with the type and payload
