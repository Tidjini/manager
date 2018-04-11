//to avoid the undefined error for state in redux
const INITIAL_STATE = { email: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "email_changed":
      return actions.payload;
    default:
      return state;
  }
};
