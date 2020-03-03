import constants from './../constants';
import firebase from 'firebase';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();



