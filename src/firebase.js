import constants from './constants';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

export const ui = firebase.auth();

export const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/courses",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

export const storage = firebase.storage()