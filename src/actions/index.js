import constants from './../constants';
import { db, auth } from '../firebase';
const { c } = constants;


export function watchFirebaseLessonsRef() {
  return (dispatch) => {
    db.ref('/lessons').on('child_added', data => {
      const newLesson = Object.assign({}, data.val());
      dispatch(receiveLesson(newLesson));
    });
  };
}

export const receiveLesson = (lessonFromFirebase) => {
  return {
    type: c.RECEIVE_LESSON,
    lesson: lessonFromFirebase
  };
}

export function watchFirebaseCoursesRef() {
  return (dispatch) => {
    db.ref('/courses').on('child_added', data => {
      const newCourse = Object.assign({}, data.val());
      dispatch(receiveCourse(newCourse));
    });
  };
}

export const receiveCourse = (courseFromFirebase) => {
  return {
    type: c.RECEIVE_COURSE,
    course: courseFromFirebase
  };
}

export const signOut = () => {
  auth.signOut();
}

export const updateText = (data) => {
  var updates = {};
  updates['/lessons/' + data.lessonId + '/content/' + data.elementIndex + '/content'] = data.content;
  db.ref().update(updates);
  return {
    type: c.UPDATE_TEXT,
    elementIndex: data.elementIndex,
    content: data.content,
    lessonId: data.lessonId
  }
};

export const addCourse = (courseTitle = "New Course") => {
  const newCourseKey = db.ref().child('courses').push().key;
  var updates = {};
  updates['/courses/' + newCourseKey] = {
    "segments": {
      'default': {
        title: 'First Segment',
        lessons: { 'placeholder': { lessonId: 1, title: "TestLesson" } }
      }
    },
    "title": courseTitle,
    "id": newCourseKey
  };
  db.ref().update(updates);
  return {
    type: c.ADD_COURSE,
    title: courseTitle,
    id: newCourseKey
  };
};

export const addSegment = async (segmentTitle = "New segment", courseId) => {

  const newSegmentKey = db.ref('/courses/' + courseId).child('segments').push().key;
  var updates = {};
  updates['/courses/' + courseId + '/segments/' + newSegmentKey] = {
    "lessons": [{ lessonId: 0, title: "default" }],
    "title": segmentTitle,
  };

  const ret = await db.ref().update(updates);
  console.log(ret);

  return {
    type: c.ADD_SEGMENT,
    title: segmentTitle,
    courseId: courseId,
    lessons: [{ lessonId: 1, title: "default" }],
    segmentId: newSegmentKey
  };
};

export const newLesson = (lessonTitle = "New Lesson", courseId, segmentId, oldLessons) => {
  const newLessonKey = db.ref().child('lessons').push().key;
  var updates = {};
  updates['/lessons/' + newLessonKey] = {
    title: lessonTitle,
    lessonId: newLessonKey,
    courseId,
    segmentId,
    content: [{ type: 'default' }]
  };
  updates['/courses/' + courseId + '/segments/' + segmentId + '/lessons'] = [...oldLessons, {
    title: lessonTitle,
    lessonId: newLessonKey
  }];
  db.ref().update(updates);
  return [{
    type: c.ADD_LESSON,
    title: lessonTitle,
    lessonId: newLessonKey,
    courseId,
    segmentId
  }, {
    type: c.ADD_LESSON_TO_SEGMENT, title: lessonTitle,
    lessonId: newLessonKey,
    courseId,
    segmentId
  }]
};

export const createElement = (type, oldContent, lessonId) => {
  const newElement = {
    type,
    content: `This is a new ${type.toUpperCase()} element`,
    format: {
      align: "left"
    }
  };
  var updates = {};
  updates['/lessons/' + lessonId + '/content'] = [...oldContent, newElement];
  db.ref().update(updates);
  return {
    type: c.ADD_ELEMENT,
    lessonId,
    newElement
  }
}

export const addVideo = lessonId => {
  var updates = {};
  updates['/lessons/' + lessonId + '/video'] = {
    src: false,
    title: false
  };
  db.ref().update(updates);
  return {
    type: c.ADD_VIDEO,
    lessonId
  }
}

export const updateVideo = (params) => {
  console.log(params);
}

export const deleteVideo = lessonId => {
  var updates = {};
  updates['/lessons/' + lessonId + '/video'] = {};
  db.ref().update(updates);
  return {
    type: c.REMOVE_VIDEO,
    lessonId
  }
}

export const addPicture = data => {
  console.log(data);
  return { type: 'none' };
}

export const deleteText = data => {
  const { elementIndex, lessonId, fullLessonContent } = data;
  const newLessonContent = [...fullLessonContent];
  newLessonContent.splice(elementIndex, 1);
  var updates = {};
  updates['/lessons/' + lessonId + '/content'] = newLessonContent;
  db.ref().update(updates);
  return {
    type: c.REMOVE_ELEMENT,
    lessonId,
    elementIndex
  };
};

export const moveElement = data => {
  const { fullLessonContent, elementIndex, direction, lessonId } = data;
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
  var updates = {};
  updates['/lessons/' + lessonId + '/content'] = newContent;
  db.ref().update(updates);
  return {
    type: c.MOVE_ELEMENT, elementIndex: elementIndex,
    lessonId: lessonId, direction: direction
  }
}





