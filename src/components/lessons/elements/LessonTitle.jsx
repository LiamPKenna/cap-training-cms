import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 2rem 0 0.5rem;
  text-align: ${props => props.format.align};
`;

const LessonTitle = props => {
  const { format, content } = props;
  const titleStyle = {};
  return (
    <Title format={format} style={titleStyle}>
      {content}
    </Title>
  );
};

export default LessonTitle;
