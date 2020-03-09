import constants from "../constants";

const c = constants.c;

const userReducer = (state = { admin: false }, action) => {
  const { type } = action;
  const newState = { ...state };
  switch (type) {
    case c.SET_ADMIN:
      newState.admin = action.admin;
      return newState;
    case c.ADD_USER:
      newState[action.email.split(".").join("")] = {
        email: action.email,
        completedCourses: action.completedCourses
      };
      return newState;
    default:
      return state;
  }
};

export default userReducer;
