import React, { useEffect, useState } from "react";
import Lesson from "./lessons/Lesson";
import Courses from "./courses/Courses";
import Course from "./courses/Course";
import NavBar from "./nav/NavBar";
import Home from "./Home";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { watchFirebaseLessonsRef, watchFirebaseCoursesRef } from "../actions";
import { useDispatch } from "react-redux";
import SignIn from "./SignIn";
import { auth } from "../firebase";

function App(props) {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged(function(user) {
    if (user) {
      setCurrentUser(user);
      dispatch({
        type: "SET_ADMIN",
        admin: user.email === "liam@liamkenna.com"
      });
    } else {
      setCurrentUser(null);
      dispatch({ type: "SET_ADMIN", admin: false });
    }
  });
  useEffect(() => {
    dispatch(watchFirebaseLessonsRef());
    dispatch(watchFirebaseCoursesRef());
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
            </Switch>
          ) : (
            <SignIn />
          )}
        </Container>
      </Router>
    </div>
  );
}

export default App;
