import React from "react";
import Lesson from "./lessons/Lesson";
import Courses from "./courses/Courses";
import Course from "./courses/Course";
import NavBar from "./NavBar";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import constants from "./../constants";
// const { c } = constants;

function App(props) {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar admin={true} />
        </header>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
