// import mockLessons from '../mockData/mockLessons';
import constants from '../constants';

const c = constants.c;
const initialState = {}//mockLessons;
const lessonsReducer = (state = initialState, action) => {
  const { type } = action;
  let newState;
  let newLesson;
  let newContent;
  let newSection;
  switch (type) {
    case c.UPDATE_TEXT:
      let { lessonId, sectionIndex, content } = action;
      newLesson = Object.assign({}, state[lessonId]);
      newContent = [...state[lessonId].content];
      newSection = Object.assign({}, state[lessonId].content[sectionIndex]);
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
    case c.ADD_ELEMENT:
      newState = { ...state };
      newLesson = newState[action.lessonId];
      newLesson.content = [...newLesson.content, action.newElement];
      newState[action.lessonId] = newLesson;
      return newState;
    case c.REMOVE_ELEMENT:
      newState = { ...state };
      newLesson = newState[action.lessonId];
      newContent = [...newLesson.content];
      newContent.splice(action.elementIndex, 1);
      newLesson.content = newContent;
      newState[action.lessonId] = newLesson;
      return newState;
    default:
      return state;
  }

}

export default lessonsReducer;