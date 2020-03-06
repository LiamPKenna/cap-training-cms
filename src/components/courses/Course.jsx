import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { addSegment, newLesson } from "../../actions";
import NewItemButton from "./NewItemButton";
import NewItemInput from "./NewItemInput";
import {
  PageWrapDiv,
  NewItemDiv,
  StyledListItem
} from "./StyledCourseComponents";

const Course = props => {
  const { courseId } = useParams();
  const course = props.courses[courseId];
  const [showSegmentForm, setShowSegmentForm] = useState(false);
  const [newSegmentText, setNewSegmentText] = useState("");
  const [showLessonForm, setShowLessonForm] = useState(false);
  const [newLessonText, setNewLessonText] = useState("");
  const [segmentFocus, setSegmentFocus] = useState(null);

  const makeLessons = lessons => {
    if (lessons && Object.keys(lessons).length > 1) {
      return lessons
        .filter(l => l.title !== "default")
        .map(lesson => (
          <StyledListItem key={lesson.lessonId}>
            <Link to={`/lessons/${lesson.lessonId}`}>{lesson.title}</Link>
          </StyledListItem>
        ));
    } else {
      return <StyledListItem>No lessons yet</StyledListItem>;
    }
  };

  const showThisSegmentLessonInput = segmentId => {
    setSegmentFocus(segmentId);
    setShowLessonForm(true);
  };

  const makeSegments = segments => {
    if (segments && Object.keys(segments).length > 1) {
      return Object.keys(segments)
        .filter(segmentId => segmentId !== "default")
        .map(segmentId => (
          <StyledListItem key={segmentId}>
            <h2>{segments[segmentId].title}</h2>
            <ul>{makeLessons(segments[segmentId].lessons)}</ul>
            <NewItemDiv>
              {!showLessonForm || segmentFocus !== segmentId ? (
                <NewItemButton
                  text="NEW LESSON"
                  clickHandler={() => showThisSegmentLessonInput(segmentId)}
                  title="New Lesson"
                />
              ) : (
                ""
              )}
              {showLessonForm && segmentFocus === segmentId ? (
                <NewItemInput
                  value={newLessonText}
                  handleChange={e => setNewLessonText(e.target.value)}
                  handleSubmit={() =>
                    handleNewLesson(segmentId, segments[segmentId].lessons)
                  }
                  inputName="Lesson Name"
                  handleCancel={cancelLessonInput}
                />
              ) : (
                ""
              )}
            </NewItemDiv>
          </StyledListItem>
        ));
    } else {
      return <li>No segments yet</li>;
    }
  };

  const handleNewSegment = async () => {
    setShowSegmentForm(false);
    const action = await addSegment(newSegmentText, courseId);
    setNewSegmentText("");
    props.dispatch(action);
  };

  const handleNewLesson = async (segmentId, oldLessons) => {
    setSegmentFocus(null);
    // const segmentAction = await addLessonToSegment(
    //   newLessonText,
    //   courseId,
    //   segmentId,
    //   index
    // );
    const lessonAction = await newLesson(
      newLessonText,
      courseId,
      segmentId,
      oldLessons
    );
    props.dispatch(lessonAction[1]);
    props.dispatch(lessonAction[0]);
    setNewLessonText("");
  };

  const cancelSegmentInput = () => {
    setShowSegmentForm(false);
    setNewSegmentText("");
  };

  const cancelLessonInput = () => {
    setShowLessonForm(false);
    setNewLessonText("");
    setSegmentFocus(null);
  };

  if (!course) {
    return <Loading />;
  } else {
    return (
      <PageWrapDiv>
        <h1>{course.title}</h1>
        <div>
          <ul>{makeSegments(course.segments)}</ul>
          <NewItemDiv>
            {!showSegmentForm ? (
              <NewItemButton
                text="NEW SEGMENT"
                clickHandler={() => setShowSegmentForm(true)}
                title="New Segment"
              />
            ) : (
              ""
            )}
            {showSegmentForm ? (
              <NewItemInput
                value={newSegmentText}
                handleChange={e => setNewSegmentText(e.target.value)}
                handleSubmit={handleNewSegment}
                inputName="Segment Name"
                handleCancel={cancelSegmentInput}
              />
            ) : (
              ""
            )}
          </NewItemDiv>
        </div>
      </PageWrapDiv>
    );
  }
};

const mapPropsToState = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapPropsToState)(Course);
