import constants from './../constants';
import firebase from 'firebase';
const { firebaseConfig, c } = constants;

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
const lessonsTable = db.ref('/lessons');

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


