import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const Course = props => {
  const { courseId } = useParams();
  const course = props.courses[courseId];

  const makeLessons = (lessons, segmentId) => {
    console.log(lessons);

    return Object.keys(lessons).map(lessonId => (
      <li key={lessonId}>
        <a href={`/lessons/${courseId}/${segmentId}/${lessonId}`}>
          {lessons[lessonId].title}
        </a>
      </li>
    ));
  };

  const makeSegments = segments => {
    return Object.keys(segments).map(segmentId => (
      <li key={segmentId}>
        <h2>{segments[segmentId].title}</h2>
        <ul>{makeLessons(segments[segmentId].lessons, segmentId)}</ul>
      </li>
    ));
  };
  return (
    <div>
      <h1>{course.title}</h1>
      <div>
        <ul>{makeSegments(course.segments)}</ul>
      </div>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapPropsToState)(Course);
