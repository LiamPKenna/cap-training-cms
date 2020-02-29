import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Course = props => {
  const { courseId } = useParams();
  const course = props.courses[courseId];

  const makeLessons = (lessons, segmentId) => {
    console.log(lessons);

    return Object.keys(lessons).map(lessonId => (
      <li key={lessonId}>
        <Link to={`/lessons/${courseId}/${segmentId}/${lessonId}`}>
          {lessons[lessonId].title}
        </Link>
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
