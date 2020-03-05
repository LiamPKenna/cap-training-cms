import constants from './../constants';
import firebase from 'firebase';
const { firebaseConfig, c } = constants;

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const lessonsTable = db.ref('/lessons');
const coursesTable = db.ref('/courses');

export function watchFirebaseLessonsRef() {
  return (dispatch) => {
    lessonsTable.on('child_added', data => {
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
    coursesTable.on('child_added', data => {
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

export const updateText = (data) => {
  var updates = {};
  updates['/lessons/' + data.lessonId + '/content/' + data.sectionIndex + '/content'] = data.content;
  db.ref().update(updates);
  return {
    type: c.UPDATE_TEXT,
    sectionIndex: data.sectionIndex,
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






