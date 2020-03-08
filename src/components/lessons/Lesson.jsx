import React from "react";
import makeElement from "./makeElement";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import NewElementSelector from "./NewElementSelector";
import { createElement } from "../../actions";
import VideoBlock from "./videoElements/VideoBlock";

const makePage = (lesson, lessonId) =>
  lesson.map((e, i) => makeElement(e, i, lessonId, lesson));

const Lesson = props => {
  const { lessonId } = useParams();
  const lesson = props.lessons[lessonId];
  const addNewElement = newElementType => {
    props.dispatch(
      createElement(newElementType, lesson.content, lesson.lessonId)
    );
  };
  return lesson ? (
    <div>
      {true ? (
        <VideoBlock
          src={"https://www.youtube-nocookie.com/embed/JQjroW6J4mw"}
          title={"test"}
        />
      ) : (
        ""
      )}
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

export default connect(mapStateToProps)(Lesson);
