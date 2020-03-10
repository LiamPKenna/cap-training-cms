import React from "react";
import styled from "styled-components";

const LessonHeadingElement = styled.h2`
  margin: 1rem 0;
  font-size: 1.8rem;
`;

const LessonHeading = params => {
  return <LessonHeadingElement>{params.content}</LessonHeadingElement>;
};

export default LessonHeading;
