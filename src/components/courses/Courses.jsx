import React, { useState } from "react";
import { connect } from "react-redux";
import Loading from "../utilities/Loading";
import { addCourse } from "../../actions";
import NewItemButton from "./NewItemButton";
import NewItemInput from "./NewItemInput";
import CourseLink from "./CourseLink";
import {
  StyledListItem,
  PageWrapDiv,
  NewItemDiv
} from "./StyledCourseComponents";

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
        <StyledListItem key={courseId}>
          <CourseLink
            courseId={courseId}
            title={props.courses[courseId].title}
          />
        </StyledListItem>
      ));
    }
  };

  const makeAdminDiv = () => {
    return (
      <>
        {props.admin ? (
          <NewItemDiv>
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
          </NewItemDiv>
        ) : (
          ""
        )}
      </>
    );
  };

  return (
    <PageWrapDiv>
      <h1>All Courses:</h1>
      <ul>{makeCourses()}</ul>
      {true ? makeAdminDiv() : ""}
    </PageWrapDiv>
  );
};

const mapStateToProps = state => {
  return {
    courses: state.courses,
    admin: state.users.admin
  };
};

export default connect(mapStateToProps)(Courses);
