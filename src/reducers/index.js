import { combineReducers } from "redux";
import authReducer from "./authReducer";

//this containe all our reducers (function that give us data (states of the application))
export default combineReducers({
  auth: authReducer
});
