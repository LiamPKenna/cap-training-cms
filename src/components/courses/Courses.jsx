import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { addCourse } from "../../actions";
import NewCourseButton from "./NewCourseButton";
import NewCourseInput from "./NewCourseInput";

const Courses = props => {
  const [showForm, setShowForm] = useState(false);
  const [newCourseText, setNewCourseText] = useState("");

  const showNewCourseForm = () => {
    setShowForm(true);
  };

  const handleNewCourse = () => {
    setShowForm(false);
    props.dispatch(addCourse(newCourseText));
  };

  const cancelInput = () => {
    setShowForm(false);
    setNewCourseText("");
  };

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
      {!showForm ? (
        <NewCourseButton
          clickHandler={showNewCourseForm}
          title={"New Course"}
        />
      ) : (
        ""
      )}
      {showForm ? (
        <NewCourseInput
          value={newCourseText}
          handleChange={e => setNewCourseText(e.target.value)}
          handleSubmit={handleNewCourse}
          inputName="Course Name"
          handleCancel={cancelInput}
        />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateProps)(Courses);
