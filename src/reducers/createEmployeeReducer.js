import { NAME_CHANGED, PHONE_CHANGED } from "../actions/types";
const INITIAL_STATE = {
  name: "",
  phone: ""
};
export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload };
    default:
      return state;
  }
};
