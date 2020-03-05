// import mockLessons from '../mockData/mockLessons';
import constants from '../constants';

const c = constants.c;
const initialState = {}//mockLessons;
const lessonsReducer = (state = initialState, action) => {
  const { type } = action;
  let newState;
  switch (type) {
    case c.UPDATE_TEXT:
      const { lessonId, sectionIndex, content } = action;
      const newLesson = Object.assign({}, state[lessonId]);
      const newContent = [...state[lessonId].content];
      const newSection = Object.assign({}, state[lessonId].content[sectionIndex]);
      newSection.content = content;
      newContent[sectionIndex] = newSection;
      newLesson.content = newContent;
      newState = Object.assign({}, state);
      newState[lessonId] = newLesson;
      return newState;
    case c.RECEIVE_LESSON:
      newState = Object.assign({}, state);
      newState[action.lesson.lessonId] = action.lesson;
      return newState;
    case c.ADD_LESSON:
      newState = { ...state };
      newState[action.lessonId] = {
        title: action.title,
        courseId: action.courseId,
        segmentId: action.segmentId,
        content: [{ type: 'default' }]
      }
      return newState;
    default:
      return state;
  }

}

export default lessonsReducer;