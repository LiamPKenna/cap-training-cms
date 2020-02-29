import React from "react";
import Lesson from "./lessons/Lesson";
import Courses from "./courses/Courses";
import Course from "./courses/Course";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavBar admin={true} />
        </header>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/courses/:courseId">
            <Course />
          </Route>
          <Route path="/lessons/:courseId/:segmentId/:lessonId">
            <Lesson />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateProps)(App);
