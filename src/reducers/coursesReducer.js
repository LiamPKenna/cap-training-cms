import constants from '../constants';
const c = constants.c;

const initialState = {};
const coursesReducer = (state = initialState, action) => {
  const { type } = action;
  let newState;
  switch (type) {
    case 'UPDATE':
      console.log(action);


      break;
    case c.RECEIVE_COURSE:
      newState = Object.assign({}, state);
      newState[1] = action.course;
      console.log(newState);

      return newState;
    default:
      break;
  }

  return state;
}

export default coursesReducer;