import constants from '../constants';
const c = constants.c;

const initialState = {};
const coursesReducer = (state = initialState, action) => {
  const { type } = action;
  let newState;
  let newCourse;
  let newSegments;
  let newSegment;
  let newLessons;
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
      newCourse = { ...newState[action.courseId] };
      newSegments = { ...newCourse.segments };
      newSegments[action.segmentId] = {
        title: action.title,
        lessons: action.lessons,
      };
      newCourse.segments = newSegments
      newState[action.courseId] = newCourse
      return newState;
    case c.ADD_LESSON_TO_SEGMENT:
      newState = Object.assign({}, state);
      newCourse = { ...newState[action.courseId] };
      newSegments = { ...newCourse.segments };
      newSegment = newSegments[action.segmentId];
      newLessons = [...newSegment.lessons, { title: action.title, lessonId: action.lessonId }];
      newSegment.lessons = newLessons;
      newSegments[action.segmentId] = newSegment;
      newCourse.segments = newSegments;
      newState[action.courseId] = newCourse;
      return newState;
    default:
      break;
  }

  return state;
}

export default coursesReducer;