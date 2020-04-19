import constants from './../constants';
import { db } from '../firebase';
const { c } = constants;

export function watchFirebaseCoursesRef() {
  return (dispatch) => {
    db.ref(constants.brandFolder + '/courses').on('child_added', (params) => {
      const newCourse = Object.assign({}, params.val());
      dispatch(receiveCourse(newCourse));
    });
  };
}

export const receiveCourse = (courseFromFirebase) => {
  return {
    type: c.RECEIVE_COURSE,
    course: courseFromFirebase,
  };
};

export const addCourse = (courseTitle = 'New Course') => {
  const newCourseKey = db
    .ref(constants.brandFolder + '/')
    .child('courses')
    .push().key;
  var updates = {};
  updates['/courses/' + newCourseKey] = {
    segments: {
      default: {
        title: 'First Segment',
        lessons: [{ lessonId: 0, title: 'default' }],
      },
    },
    title: courseTitle,
    id: newCourseKey,
  };
  db.ref(constants.brandFolder + '').update(updates);
  return {
    type: c.ADD_COURSE,
    title: courseTitle,
    id: newCourseKey,
  };
};

export const updateCourseName = (params) => {
  const { courseId, name } = params;
  const updates = {};
  updates['/courses/' + courseId + '/title'] = name;
  db.ref(constants.brandFolder + '').update(updates);
  return { type: c.UPDATE_COURSE_TITLE, courseId, name };
};

export const deleteCourse = (params) => {
  const { courseId, course } = params;
  const lessons = [];
  Object.keys(course.segments).forEach((s) =>
    course.segments[s].lessons.forEach((l) => lessons.push(l))
  );
  const updates = {};
  lessons.forEach((l) => {
    updates['/lessons/' + l.lessonId] = {};
  });
  updates['/courses/' + courseId] = {};
  db.ref(constants.brandFolder + '').update(updates);
  const lessonsToDelete = lessons.map((l) => ({
    type: c.REMOVE_LESSON,
    lessonId: l.lessonId,
  }));
  return [{ type: c.REMOVE_COURSE, courseId }, ...lessonsToDelete];
};

export const addSegment = (segmentTitle = 'New segment', courseId) => {
  const newSegmentKey = db
    .ref(constants.brandFolder + '/courses/' + courseId)
    .child('segments')
    .push().key;
  var updates = {};
  updates['/courses/' + courseId + '/segments/' + newSegmentKey] = {
    lessons: [{ lessonId: 0, title: 'default' }],
    title: segmentTitle,
  };
  db.ref(constants.brandFolder + '').update(updates);
  return {
    type: c.ADD_SEGMENT,
    title: segmentTitle,
    courseId: courseId,
    lessons: [{ lessonId: 0, title: 'default' }],
    segmentId: newSegmentKey,
  };
};
