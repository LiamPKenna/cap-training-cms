import React from "react";
import styled from "styled-components";

const LessonHeadingElement = styled.h2`
  margin: 1rem 0;
`;

const LessonHeading = params => {
  return <LessonHeadingElement>{params.content}</LessonHeadingElement>;
};

export default LessonHeading;
