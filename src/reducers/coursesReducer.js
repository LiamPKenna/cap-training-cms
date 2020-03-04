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
      newState[action.course.id] = action.course;
      return newState;
    case c.ADD_SEGMENT:
      newState = Object.assign({}, state);
      const newCourse = { ...newState[action.courseId] };
      const newSegments = { ...newCourse.segments };
      newSegments[action.segmentId] = {
        title: action.title,
        lessons: action.lessons,
      };
      newCourse.segments = newSegments
      newState[action.courseId] = newCourse
      return newState;
    default:
      break;
  }

  return state;
}

export default coursesReducer;