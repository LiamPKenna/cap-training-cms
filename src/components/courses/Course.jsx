import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { addSegment, addLessonToSegment, newLesson } from "../../actions";

const Course = props => {
  const { courseId } = useParams();
  const course = props.courses[courseId];

  const makeLessons = (lessons, segmentId) => {
    if (lessons && Object.keys(lessons).length > 1) {
      return lessons
        .filter(l => l !== "default")
        .map(lesson => (
          <li key={lesson.lessonId}>
            <Link to={`/lessons/${lesson.lessonId}`}>{lesson.title}</Link>
          </li>
        ));
    } else {
      return <li>No lessons yet</li>;
    }
  };

  const makeSegments = segments => {
    if (segments && Object.keys(segments).length > 1) {
      return Object.keys(segments)
        .filter(segmentId => segmentId !== "default")
        .map(segmentId => (
          <li key={segmentId}>
            <h2>{segments[segmentId].title}</h2>
            <ul>{makeLessons(segments[segmentId].lessons, segmentId)}</ul>
            <button onClick={() => newLessonClick(segmentId)}>
              NEW LESSON
            </button>
          </li>
        ));
    } else {
      return <li>No segments yet</li>;
    }
  };

  const newSegmentClick = async () => {
    const action = await addSegment("New Segment", courseId);
    props.dispatch(action);
  };

  const newLessonClick = async segmentId => {
    const segmentAction = await addLessonToSegment(
      "New Lesson",
      courseId,
      segmentId
    );
    props.dispatch(segmentAction);
    const lessonAction = await newLesson("New Lesson", courseId, segmentId);
    props.dispatch(lessonAction);
  };

  if (!course) {
    return <Loading />;
  } else {
    return (
      <div>
        <h1>{course.title}</h1>
        <div>
          <ul>{makeSegments(course.segments)}</ul>
          <button onClick={newSegmentClick}>NEW SEGMENT</button>
        </div>
      </div>
    );
  }
};

const mapPropsToState = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapPropsToState)(Course);
