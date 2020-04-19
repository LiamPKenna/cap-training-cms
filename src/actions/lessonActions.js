import constants from './../constants';
import { db } from '../firebase';
const { c } = constants;

export function watchFirebaseLessonsRef() {
  return (dispatch) => {
    db.ref(constants.brandFolder + '/lessons').on('child_added', (params) => {
      const newLesson = Object.assign({}, params.val());
      dispatch(receiveLesson(newLesson));
    });
  };
}

export const receiveLesson = (lessonFromFirebase) => {
  return {
    type: c.RECEIVE_LESSON,
    lesson: lessonFromFirebase,
  };
};

export const updateText = (params) => {
  var updates = {};
  updates[
    '/lessons/' +
      params.lessonId +
      '/content/' +
      params.elementIndex +
      '/content'
  ] = params.content;
  db.ref(constants.brandFolder + '').update(updates);
  return {
    type: c.UPDATE_TEXT,
    elementIndex: params.elementIndex,
    content: params.content,
    lessonId: params.lessonId,
  };
};

export const newLesson = (
  lessonTitle = 'New Lesson',
  courseId,
  segmentId,
  oldLessons
) => {
  const newLessonKey = db
    .ref(constants.brandFolder + '')
    .child('lessons')
    .push().key;
  var updates = {};
  updates['/lessons/' + newLessonKey] = {
    title: lessonTitle,
    lessonId: newLessonKey,
    courseId,
    segmentId,
    content: [{ type: 'default' }],
  };
  updates['/courses/' + courseId + '/segments/' + segmentId + '/lessons'] = [
    ...oldLessons,
    {
      title: lessonTitle,
      lessonId: newLessonKey,
    },
  ];
  db.ref(constants.brandFolder + '').update(updates);
  return [
    {
      type: c.ADD_LESSON,
      title: lessonTitle,
      lessonId: newLessonKey,
      courseId,
      segmentId,
    },
    {
      type: c.ADD_LESSON_TO_SEGMENT,
      title: lessonTitle,
      lessonId: newLessonKey,
      courseId,
      segmentId,
    },
  ];
};

export const createElement = (type, oldContent, lessonId) => {
  const newElement =
    type === 'break'
      ? { type }
      : {
          type,
          content: `This is a new ${type.toUpperCase()} element`,
          format: {
            align: 'left',
          },
        };
  var updates = {};
  updates['/lessons/' + lessonId + '/content'] = [...oldContent, newElement];
  db.ref(constants.brandFolder + '').update(updates);
  return {
    type: c.ADD_ELEMENT,
    lessonId,
    newElement,
  };
};

export const addVideo = (lessonId) => {
  var updates = {};
  updates['/lessons/' + lessonId + '/video'] = {
    src: false,
    title: false,
  };
  db.ref(constants.brandFolder + '').update(updates);
  return {
    type: c.ADD_VIDEO,
    lessonId,
  };
};

export const updateVideo = (params) => {
  const { url, title, lessonId } = params;
  var updates = {};
  updates['/lessons/' + lessonId + '/video'] = {
    src: url,
    title,
  };
  db.ref(constants.brandFolder + '').update(updates);
  return { type: c.UPDATE_VIDEO, src: url, title, lessonId };
};

export const deleteVideo = (lessonId) => {
  var updates = {};
  updates['/lessons/' + lessonId + '/video'] = {};
  db.ref(constants.brandFolder + '').update(updates);
  return {
    type: c.REMOVE_VIDEO,
    lessonId,
  };
};

export const addPicture = (params) => {
  const { lessonId, allContent } = params;
  const newPicture = {
    type: 'picture',
    mode: false,
    pictures: false,
  };
  const newLessonContent = [...allContent, newPicture];
  var updates = {};
  updates['/lessons/' + lessonId + '/content'] = newLessonContent;
  db.ref(constants.brandFolder + '').update(updates);
  return { type: c.ADD_PICTURE, lessonId, newPicture };
};

export const updatePicture = (params) => {
  const { url, alt, lessonId, elementIndex } = params;
  if (!url) return 'NO URL!!!';
  const updatedPicture = {
    pictures: [
      {
        src: url,
        alt,
      },
    ],
    mode: 1,
    type: 'picture',
  };
  var updates = {};
  updates['/lessons/' + lessonId + '/content/' + elementIndex] = updatedPicture;
  db.ref(constants.brandFolder + '').update(updates);
  return { type: c.UPDATE_PICTURE, lessonId, elementIndex, updatedPicture };
};

export const deleteText = (params) => {
  const { elementIndex, lessonId, fullLessonContent } = params;
  const newLessonContent = [...fullLessonContent];
  newLessonContent.splice(elementIndex, 1);
  var updates = {};
  updates['/lessons/' + lessonId + '/content'] = newLessonContent;
  db.ref(constants.brandFolder + '').update(updates);
  return {
    type: c.REMOVE_ELEMENT,
    lessonId,
    elementIndex,
  };
};

export const moveElement = (params) => {
  const { fullLessonContent, elementIndex, direction, lessonId } = params;
  let newContent = [...fullLessonContent];
  const before = newContent.slice(0, elementIndex);
  const after = newContent.slice(elementIndex + 1);
  const element = newContent[elementIndex];
  let move;
  if (direction === 'down') {
    move = after.shift();
    newContent = [...before, move, element, ...after];
  } else {
    move = before.pop();
    newContent = [...before, element, move, ...after];
  }
  const updates = {};
  updates['/lessons/' + lessonId + '/content'] = newContent;
  db.ref(constants.brandFolder + '').update(updates);
  return {
    type: c.MOVE_ELEMENT,
    elementIndex: elementIndex,
    lessonId: lessonId,
    direction: direction,
  };
};

export const lessonCompleted = (params) => {
  const updates = {};
  updates[
    '/users/' + params.currentUser + '/completedLessons/' + params.lessonId
  ] = true;
  db.ref(constants.brandFolder + '').update(updates);
  return getCompletedLessons(params.currentUser);
};

export const getCompletedLessons = (currentUser) => {
  return async (dispatch) => {
    return db
      .ref(constants.brandFolder + '/users/' + currentUser)
      .once('value')
      .then((snap) => {
        if (snap.val()) {
          dispatch({
            type: c.COMPLETE_LESSON,
            completedLessons: snap.val().completedLessons,
          });
        } else {
          dispatch({ type: 'none' });
        }
      });
  };
};
