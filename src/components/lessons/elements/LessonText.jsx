import React from "react";
import styled from "styled-components";

const TextP = styled.p`
  margin: 0.75rem 0;
  font-size: 1rem;
  font-family: roboto;
`;

const LessonText = params => {
  const formatText = text => {
    return text.split("\n");
  };
  return (
    <div>
      {formatText(params.content).map((c, i) => (
        <TextP key={i}>{c}</TextP>
      ))}
    </div>
  );
};

export default LessonText;
