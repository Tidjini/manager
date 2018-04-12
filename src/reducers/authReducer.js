import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOADING_ON
} from "../actions/types";

//to avoid the undefined error for state in redux
const INITIAL_STATE = {
  email: "",
  password: "",
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //must always send a new object (comparaison oldState vs newState by redux)
      return { ...state, email: action.payload, error: "" };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: "" };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: "Authentication Faild.",
        password: "",
        loading: false
      };
    case LOADING_ON:
      return { ...state, loading: true };
    default:
      return state;
  }
};
