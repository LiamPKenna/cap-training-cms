import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CourseLinkHeader = styled.h2`
  :link {
    text-decoration: none;
  }
`;

const CourseLink = props => {
  const [editMode, setEditMode] = useState(false);
  const { courseId, title } = props;
  return (
    <>
      <Link to={`/courses/${courseId}`} style={{ textDecoration: "none" }}>
        <CourseLinkHeader className="course-links">{title}</CourseLinkHeader>
      </Link>
    </>
  );
};

export default CourseLink;
