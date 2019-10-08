import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// make a initial state
const initialState = {};

// prepare middleware array
const middleware = [thunk];

// prepare store with three parameter
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

// export store

export default store;
