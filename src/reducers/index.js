import { combineReducers } from "redux";
import postReducer from "./postReducer";

//combine all the reducer to make single source of truth;

export default combineReducers({
  posts: postReducer
});
