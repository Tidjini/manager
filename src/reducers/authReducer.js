import { EMAIL_CHANGED } from "../actions/types";

//to avoid the undefined error for state in redux
const INITIAL_STATE = { email: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //must always send a new object (comparaison oldState vs newState by redux)
      return { ...state, email: action.payload };
    default:
      return state;
  }
};
