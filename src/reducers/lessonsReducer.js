import mockLessons from '../mockData/mockLessons';

const initialState = mockLessons;
const lessonsReducer = (state = initialState, action) => {
  const { type } = action;
  let newState;
  switch (type) {
    case 'UPDATE_TEXT':
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

    default:
      return state;
  }

}

export default lessonsReducer;