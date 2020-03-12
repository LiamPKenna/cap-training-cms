import React from 'react';
import styled from 'styled-components';

const CodeDiv = styled.div`
  margin: 15px 0;
  padding: 1rem 2rem;
  background-color: lightgray;
`;

const LessonCode = params => {
  return (
    <CodeDiv>
      <pre>
        <code>{params.content}</code>
      </pre>
    </CodeDiv>
  );
};

export default LessonCode;
