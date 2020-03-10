import constants from "../constants";

const c = constants.c;

const userReducer = (state = { admin: false }, action) => {
  const { type } = action;
  const newState = { ...state };
  switch (type) {
    case c.SET_USER:
      newState.admin = action.admin;
      newState.currentUser = action.user.email.split(".").join("");
      return newState;
    case c.ADD_USER:
      newState[action.email.split(".").join("")] = {
        email: action.email,
        completedLessons: action.completedLessons
      };
      return newState;
    case c.COMPLETE_LESSON:
      newState.completedLessons = action.completedLessons;
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default userReducer;
