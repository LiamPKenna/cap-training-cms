import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { addCourse } from "../../actions";
import NewItemButton from "./NewItemButton";
import NewItemInput from "./NewItemInput";
import styled from "styled-components";

const CourseListItem = styled.li`
  margin: 1rem 3rem 0.5rem;
`;

const CourseWrapDiv = styled.div`
  margin-top: 2rem;
`;

const NewCourseDiv = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

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
        <CourseListItem key={courseId}>
          <Link to={`/courses/${courseId}`}>
            <h2>{props.courses[courseId].title}</h2>
          </Link>
        </CourseListItem>
      ));
    }
  };

  const makeAdminDiv = () => {
    return (
      <>
        <NewCourseDiv>
          {!showForm ? (
            <NewItemButton
              clickHandler={showNewCourseForm}
              title={"New Course"}
            />
          ) : (
            ""
          )}
          {showForm ? (
            <NewItemInput
              value={newCourseText}
              handleChange={e => setNewCourseText(e.target.value)}
              handleSubmit={handleNewCourse}
              inputName="Course Name"
              handleCancel={cancelInput}
            />
          ) : (
            ""
          )}
        </NewCourseDiv>
      </>
    );
  };

  return (
    <CourseWrapDiv>
      <h1>All Courses:</h1>
      <ul>{makeCourses()}</ul>
      {true ? makeAdminDiv() : ""}
    </CourseWrapDiv>
  );
};

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateToProps)(Courses);
