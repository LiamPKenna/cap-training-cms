import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { addCourse } from "../../actions";

const Courses = props => {
  const makeCourses = () => {
    if (!props.courses) {
      return <Loading />;
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
      <button onClick={() => props.dispatch(addCourse())}>NEW</button>
    </div>
  );
};

const mapStateProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateProps)(Courses);
