import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Courses = props => {
  const makeCourses = () => {
    if (!props.courses) {
      return <h1>Loading...</h1>;
    } else {
      return Object.keys(props.courses).map(courseId => (
        <li key={courseId}>
          <Link to={`/courses/${courseId}`}>
            <h2>{props.courses[courseId].title}</h2>
          </Link>
        </li>
      ));
    }
  };
  return (
    <div>
      <ul>{makeCourses()}</ul>
    </div>
  );
};

const mapStateProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateProps)(Courses);
