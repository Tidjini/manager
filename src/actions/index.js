import firebase from "firebase";

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOADING_ON,
  LOGIN_USER_FAIL
} from "./types";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

// NOTE: we must use Redux thunk to handle Async actions creator
export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOADING_ON });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        //this is called untill the firebase auth is complete
        loginUserSucces(dispatch, user);
      })
      .catch(() => {
        //sign up the user
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            //this is called untill the firebase auth is complete
            loginUserSucces(dispatch, user);
          })
          .catch(() => {
            loginUserFail(dispatch);
          });
      });
  };
};

const loginUserFail = dispatch => {
  dispatch({ type: LOGIN_USER_FAIL });
};
const loginUserSucces = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user, error: "" });
};
