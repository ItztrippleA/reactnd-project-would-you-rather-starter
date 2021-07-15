import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./polls";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
});
