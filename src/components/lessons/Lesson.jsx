import React from "react";
import makeSection from "./makeSection";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const makePage = lesson => lesson.map((l, i) => makeSection(l, i));

const Lesson = props => {
  const { courseId, segmentId, lessonId } = useParams();
  const lesson = props.courses[courseId].segments[segmentId].lessons[lessonId];
  return <div>{makePage(lesson.content)}</div>;
};

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateToProps)(Lesson);
