import React from "react";
import makeSection from "./makeSection";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";

const makePage = lesson => lesson.map((l, i) => makeSection(l, i));

const Lesson = props => {
  const { lessonId } = useParams();
  const lesson = props.lessons[lessonId];
  return <Container>{makePage(lesson.content)}</Container>;
};

const mapStateToProps = state => {
  return {
    lessons: state.lessons
  };
};

export default connect(mapStateToProps)(Lesson);
