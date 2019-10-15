// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// // make a initial state
// const initialState = {};

// // prepare middleware array
// const middleware = [thunk];

// // prepare store with three parameter
// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// // export store

// export default store;

import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";

const initialState = {
  rotating: true
}

function configureStore(state = initialState) {
  return createStore(rotateReducer, state);
}

export default configureStore;