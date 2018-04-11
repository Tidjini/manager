import { EMAIL_CHANGED } from "../actions/types";

//to avoid the undefined error for state in redux
const INITIAL_STATE = { email: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { email: actions.payload };
    default:
      return state;
  }
};
