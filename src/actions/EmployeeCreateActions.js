import { NAME_CHANGED, PHONE_CHANGED } from "./types";

export const changeName = text => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const changePhone = text => {
  return {
    type: PHONE_CHANGED,
    payload: text
  };
};
