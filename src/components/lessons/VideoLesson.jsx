import React from "react";
import makeElement from "./makeElement";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import NewElementSelector from "./NewElementSelector";
import { createElement } from "../../actions";
import VideoUpload from "../lessons/VideoUpload";

const makePage = (lesson, lessonId) => {
  if (lesson.video) {
    return lesson.map((e, i) => makeElement(e, i, lessonId, lesson));
  } else {
    return (
      <>
        <h1>NO VIDEO</h1>
        <VideoUpload />
      </>
    );
  }
};

const VideoLesson = props => {
  const { lessonId } = useParams();
  const lesson = props.lessons[lessonId];
  const addNewElement = newElementType => {
    props.dispatch(
      createElement(newElementType, lesson.content, lesson.lessonId)
    );
  };
  return lesson ? (
    <div>
      <VideoUpload />
      {makePage(lesson.content, lessonId)}
      {true ? <NewElementSelector handleNewElement={addNewElement} /> : ""}
    </div>
  ) : (
    <Loading />
  );
};

const mapStateToProps = state => {
  return {
    lessons: state.lessons
  };
};

export default connect(mapStateToProps)(VideoLesson);
