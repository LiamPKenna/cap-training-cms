import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import NewElementSelector from "./NewElementSelector";
import { createElement, addVideo, addPicture } from "../../actions";
import VideoBlock from "./videoElements/VideoBlock";
import MainLessonTitle from "./elements/MainLessonTitle";
import LessonElement from "./LessonElement";

const Lesson = props => {
  const { lessonId } = useParams();
  const lesson = props.lessons[lessonId];

  const addNewElement = newElementType => {
    if (newElementType === "video") {
      props.dispatch(addVideo(lesson.lessonId));
    } else if (newElementType === "picture") {
      props.dispatch(
        addPicture({ lessonId: lesson.lessonId, allContent: lesson.content })
      );
    } else {
      props.dispatch(
        createElement(newElementType, lesson.content, lesson.lessonId)
      );
    }
  };
  const makePage = (fullLessonContent, lessonId) => {
    return fullLessonContent.map((e, i) => (
      <LessonElement
        key={i}
        elementIndex={i}
        lessonId={lessonId}
        fullLessonContent={fullLessonContent}
        element={e}
        admin={props.admin}
      />
    ));
  };
  return lesson ? (
    <div>
      <MainLessonTitle title={lesson.title} />
      {lesson.video ? (
        <VideoBlock
          src={lesson.video.src}
          title={lesson.video.title}
          lessonId={lesson.lessonId}
          admin={props.admin}
        />
      ) : (
        ""
      )}
      {makePage(lesson.content, lessonId)}
      {props.admin ? (
        <NewElementSelector handleNewElement={addNewElement} />
      ) : (
        ""
      )}
    </div>
  ) : (
    <Loading />
  );
};

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    admin: state.users.admin
  };
};

export default connect(mapStateToProps)(Lesson);
