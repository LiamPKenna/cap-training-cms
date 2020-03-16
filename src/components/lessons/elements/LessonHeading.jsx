import React from 'react';
import styled from 'styled-components';

const LessonHeadingElement = styled.h2`
  margin: 2rem 0 1rem;
  font-size: 1.8rem;
`;

const LessonHeading = params => {
  return <LessonHeadingElement>{params.content}</LessonHeadingElement>;
};

export default LessonHeading;
