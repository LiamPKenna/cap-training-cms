import constants from './constants';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

export const ui = new firebaseui.auth.AuthUI(firebase.auth());