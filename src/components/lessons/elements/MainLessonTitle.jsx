import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  margin: 1rem 0;
`;

const MainLessonTitle = props => {
  return (
    <div>
      <TitleText>{props.title}</TitleText>
    </div>
  );
};

export default MainLessonTitle;
