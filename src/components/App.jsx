import React from "react";
import Lesson from "./Lesson";
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
        <Lesson lesson={props.lesson} />
      </Router>
    </div>
  );
}

const mapStateProps = state => {
  return {
    lesson: state.courses[1].segments[1].lessons[1]
  };
};

export default connect(mapStateProps)(App);
