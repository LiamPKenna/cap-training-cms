import React from 'react';
import styled from 'styled-components';

const CompletedDiv = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin-top: 1rem;
  background-color: lightgreen;
  color: black;
  text-align: center;
  border-radius: 10px;
`;

const LessonCompleted = () => {
  return <CompletedDiv>COMPLETED</CompletedDiv>;
};

export default LessonCompleted;
