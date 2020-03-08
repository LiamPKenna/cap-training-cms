import constants from './constants';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
const { firebaseConfig } = constants;

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

export const auth = firebase.auth();

export const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/courses",
  signInOptions: [{
    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    requireDisplayName: false
  }]
};

export const storage = firebase.storage()