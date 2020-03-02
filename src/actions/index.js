import constants from './../constants';
import firebase from 'firebase';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref('training');

// db.ref('/brand').set({
//   name: "Epicodus",
//   logo: "https://static1.squarespace.com/static/5524448ee4b0d6f6b83ab9e2/t/57cf3de246c3c4d2933aa57c/1529949737992/?format=1500w"

// });

export default db;
