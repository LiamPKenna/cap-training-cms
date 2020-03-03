import React from "react";
import makeElement from "./makeElement";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const makePage = (lesson, lessonId) =>
  lesson.map((e, i) => makeElement(e, i, lessonId));

const Lesson = props => {
  const { lessonId } = useParams();
  const lesson = props.lessons[lessonId];
  return <div>{makePage(lesson.content, lessonId)}</div>;
};

const mapStateToProps = state => {
  return {
    lessons: state.lessons
  };
};

export default connect(mapStateToProps)(Lesson);
