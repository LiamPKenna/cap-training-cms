import constants from './../constants';
import { db, auth } from '../firebase';
const { c } = constants;

export const addUser = (email) => {
  const updates = {};
  updates['/users/' + email.split('.').join('')] = {
    email,
    completedLessons: { default: true },
  };
  db.ref(constants.brandFolder + '').update(updates);
  return {
    type: c.ADD_USER,
    completedLessons: { default: true },
    email,
  };
};

export const signOut = () => {
  auth.signOut();
};

export const getAllUsers = (params) => {
  return async (dispatch) => {
    return db
      .ref(constants.brandFolder + '/users')
      .once('value')
      .then((snap) => {
        if (snap.val()) {
          dispatch({
            type: c.ALL_USERS,
            allUsers: snap.val(),
          });
        } else {
          dispatch({ type: 'none' });
        }
      });
  };
};
