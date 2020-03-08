import constants from '../constants';

const c = constants.c;

const userReducer = (state = { admin: false }, action) => {
  const { type } = action;
  const newState = { ...state };
  switch (type) {
    case c.SET_ADMIN:
      newState.admin = action.admin;
      return newState;
    default:
      return state;
  };
}

export default userReducer;