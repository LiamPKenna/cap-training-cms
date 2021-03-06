// import mockLessons from '../mockData/mockLessons';
import constants from "../constants";

const c = constants.c;
const initialState = {}; //mockLessons;
const lessonsReducer = (state = initialState, action) => {
  const { type } = action;
  const newState = { ...state };
  let newLesson;
  let newContent;
  let newSection;
  switch (type) {
    case c.UPDATE_TEXT:
      let { lessonId, elementIndex, content } = action;
      newLesson = Object.assign({}, state[lessonId]);
      newContent = [...state[lessonId].content];
      newSection = Object.assign({}, state[lessonId].content[elementIndex]);
      newSection.content = content;
      newContent[elementIndex] = newSection;
      newLesson.content = newContent;
      newState[lessonId] = newLesson;
      return newState;
    case c.RECEIVE_LESSON:
      newState[action.lesson.lessonId] = action.lesson;
      return newState;
    case c.ADD_LESSON:
      newState[action.lessonId] = {
        title: action.title,
        courseId: action.courseId,
        segmentId: action.segmentId,
        lessonId: action.lessonId,
        content: [{ type: "default" }]
      };
      return newState;
    case c.ADD_ELEMENT:
      newLesson = newState[action.lessonId];
      newLesson.content = [...newLesson.content, action.newElement];
      newState[action.lessonId] = newLesson;
      return newState;
    case c.REMOVE_ELEMENT:
      newLesson = newState[action.lessonId];
      newContent = [...newLesson.content];
      newContent.splice(action.elementIndex, 1);
      newLesson.content = newContent;
      newState[action.lessonId] = newLesson;
      return newState;
    case c.MOVE_ELEMENT:
      newLesson = newState[action.lessonId];
      newContent = [...newLesson.content];
      const before = newContent.slice(0, action.elementIndex);
      const after = newContent.slice(action.elementIndex + 1);
      const element = newContent[action.elementIndex];
      let move;
      if (action.direction === "down") {
        move = after.shift();
        newContent = [...before, move, element, ...after];
      } else {
        move = before.pop();
        newContent = [...before, element, move, ...after];
      }
      newLesson.content = newContent;
      newState[action.lessonId] = newLesson;
      return newState;
    case c.ADD_VIDEO:
      newLesson = newState[action.lessonId];
      newLesson.video = {
        src: false,
        title: false
      };
      newState[action.lessonId] = newLesson;
      return newState;
    case c.UPDATE_VIDEO:
      newLesson = newState[action.lessonId];
      newLesson.video = {
        src: action.src,
        title: action.title
      };
      newState[action.lessonId] = newLesson;
      return newState;
    case c.REMOVE_VIDEO:
      newLesson = newState[action.lessonId];
      newLesson.video = null;
      newState[action.lessonId] = newLesson;
      return newState;
    case c.ADD_PICTURE:
      newLesson = newState[action.lessonId];
      newContent = [...newLesson.content, action.newPicture];
      newLesson.content = newContent;
      newState[action.lessonId] = newLesson;
      return newState;
    case c.UPDATE_PICTURE:
      newLesson = newState[action.lessonId];
      newContent = [...newLesson.content];
      newContent[action.elementIndex] = action.updatedPicture;
      newLesson.content = newContent;
      newState[action.lessonId] = newLesson;
      return newState;
    case c.REMOVE_LESSON:
      const newerState = {};
      Object.keys(newState).forEach(lesson => {
        if (lesson !== action.lessonId) {
          newerState[lesson] = newState[lesson];
        }
      });
      return newerState;
    default:
      return state;
  }
};

export default lessonsReducer;
