import { FETCH_POST, NEW_POST } from "./types";

// create the methods in actions:

export const fetchPosts = dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json().then(posts =>
      dispatch({
        type: FETCH_POST,
        payload: posts
      })
    )
  );
};

export const createPost = post => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(post => {
      dispatch({
        type: NEW_POST,
        payload: post
      });
    });
};

// return the callback to dispatch with the type and payload
