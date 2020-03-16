import React from 'react';
import styled from 'styled-components';

const SubElement = styled.h4`
  margin: 1rem 0 0;
  font-size: 1.5rem;
`;

const StyledHr = styled.hr`
  background: linear-gradient(
    to right,
    rgba(230, 230, 230, 1) 20%,
    rgba(236, 236, 236, 0) 80%
  );
  height: 1px;
  border: none;
  margin-bottom: 0.5rem;
`;

const LessonSub = params => {
  return (
    <>
      <SubElement>{params.content}</SubElement>
      <StyledHr />
    </>
  );
};

export default LessonSub;
