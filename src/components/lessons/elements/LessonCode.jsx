import React from 'react';
import styled from 'styled-components';

const CodeDiv = styled.div`
  margin: 1rem 0 2rem;
  padding: 1rem 2rem;
  background-color: lightgray;
  white-space: pre;
  overflow: auto;
`;

const LessonCode = params => {
  return (
    <CodeDiv>
      <code>{params.content}</code>
    </CodeDiv>
  );
};

export default LessonCode;
