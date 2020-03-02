import constants from './constants';
import firebase from 'firebase';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;