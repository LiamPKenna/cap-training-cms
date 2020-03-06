import React from "react";
import styled from "styled-components";

const TextP = styled.p`
  margin: 0.75rem 0;
  font-size: 0.75rem;
  font-family: roboto;
`;

const LessonText = params => {
  return (
    <div>
      <pre>
        <TextP>{params.content}</TextP>
      </pre>
    </div>
  );
};

export default LessonText;
