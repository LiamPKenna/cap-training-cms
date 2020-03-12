import constants from '../constants';
const c = constants.c;

const initialState = {};
const coursesReducer = (state = initialState, action) => {
  const { type } = action;
  let newState = { ...state };
  let newCourse;
  let newSegments;
  let newSegment;
  let newLessons;
  switch (type) {
    case c.RECEIVE_COURSE:
      newState[action.course.id] = action.course;
      return newState;
    case c.ADD_SEGMENT:
      newCourse = { ...newState[action.courseId] };
      newSegments = { ...newCourse.segments };
      newSegments[action.segmentId] = {
        title: action.title,
        lessons: action.lessons,
      };
      newCourse.segments = newSegments;
      newState[action.courseId] = newCourse;
      return newState;
    case c.ADD_LESSON_TO_SEGMENT:
      newCourse = { ...newState[action.courseId] };
      newSegments = { ...newCourse.segments };
      newSegment = newSegments[action.segmentId];
      newLessons = [
        ...newSegment.lessons,
        { title: action.title, lessonId: action.lessonId },
      ];
      newSegment.lessons = newLessons;
      newSegments[action.segmentId] = newSegment;
      newCourse.segments = newSegments;
      newState[action.courseId] = newCourse;
      return newState;
    case c.REMOVE_COURSE:
      const newerState = {};
      Object.keys(newState).forEach(course => {
        if (course !== action.courseId) {
          newerState[course] = newState[course];
        }
      });
      return newerState;
    case c.UPDATE_COURSE_TITLE:
      newCourse = { ...newState[action.courseId] };
      newCourse.title = action.name;
      newState[action.courseId] = newCourse;
      return newState;
    default:
      return state;
  }
};

export default coursesReducer;
