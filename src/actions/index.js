import constants from './../constants';
import firebase from 'firebase';
const { firebaseConfig, c } = constants;

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const lessonsTable = db.ref('/lessons');
const brandTable = db.ref('/brand');
const linksTable = db.ref('/links');
const coursesTable = db.ref('/courses');

const getLessons = (lessons) => {
  return {
    type: c.GET_ALL_LESSONS,
    lessons
  }
}

export const getLessonsThunk = () => {
  return dispatch => {
    let lessonObj;
    lessonsTable.once('value', snap => {
      lessonObj = snap.val();
    })
      .then(() => dispatch(getLessons(lessonObj)))
  }
};

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

export const updateText = (params) => {
  console.log(params);

};



