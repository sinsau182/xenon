import { combineReducers } from "redux";
import questions from "./questions"
import auth from "./auth";
import users from "./users"
import drDuck from "./drDuck"

export default combineReducers({
   questions,
   auth,
   users,
   drDuck,
})