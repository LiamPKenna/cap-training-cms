import React, { useEffect } from "react";
import Lesson from "./lessons/Lesson";
import VideoLesson from "./lessons/VideoLesson";
import Courses from "./courses/Courses";
import Course from "./courses/Course";
import NavBar from "./nav/NavBar";
import Home from "./Home";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { watchFirebaseLessonsRef, watchFirebaseCoursesRef } from "../actions";
import { useDispatch } from "react-redux";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(watchFirebaseLessonsRef());
    dispatch(watchFirebaseCoursesRef());
  });
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar admin={true} />
        </header>
        <Container>
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
            <Route path="/video_lessons/:lessonId">
              <VideoLesson />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
