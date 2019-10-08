//validate any action that I want to commit
// need to create types -> Constants

import { FETCH_POST, NEW_POST } from "./../actions/types";

// A simple object like initial state;

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
