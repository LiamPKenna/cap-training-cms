import React, { useEffect, useState } from 'react';
import Lesson from './lessons/Lesson';
import Courses from './courses/Courses';
import Course from './courses/courseElements/Course';
import NavBar from './nav/NavBar';
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { courseActions, userActions, lessonActions } from '../actions';
import { useDispatch, connect } from 'react-redux';
import SignIn from './SignIn';
import { auth } from '../firebase';
import constants from '../constants';
const { c, adminEmails } = constants;

function App(props) {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged(function (user) {
    const isAdmin = user ? adminEmails.includes(user.email) : false;
    if (user) {
      setCurrentUser(user);
      dispatch({
        type: c.SET_USER,
        admin: isAdmin,
        user,
        completedLessons: [],
      });
      dispatch(
        lessonActions.getCompletedLessons(user.email.split('.').join(''))
      );
      if (isAdmin) {
        dispatch(userActions.getAllUsers());
      }
    } else {
      setCurrentUser(null);
      dispatch({
        type: c.SET_USER,
        admin: false,
        user: false,
        completedLessons: [],
      });
    }
  });
  useEffect(() => {
    dispatch(lessonActions.watchFirebaseLessonsRef());
    dispatch(courseActions.watchFirebaseCoursesRef());
  });

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar user={currentUser} />
        </header>
        <Container>
          {currentUser ? (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/courses">
                <Courses courses={props.courses} />
              </Route>
              <Route path="/courses/:courseId">
                <Course />
              </Route>
              <Route path="/lessons/:lessonId">
                <Lesson />
              </Route>
              <Route path="/signin">
                <>
                  <SignIn />
                </>
              </Route>
              <Route path="/admin">
                {props.admin ? <AdminDashboard /> : <Home />}
              </Route>
            </Switch>
          ) : (
            <SignIn />
          )}
        </Container>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    admin: state.users.admin,
  };
};

export default connect(mapStateToProps)(App);
