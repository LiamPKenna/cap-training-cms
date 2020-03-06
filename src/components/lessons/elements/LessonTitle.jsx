import React from "react";

const LessonTitle = params => {
  const { format, content } = params;
  const titleStyle = {
    margin: "2rem 0 0.5rem",
    textAlign: format.align
  };
  return <h1 style={titleStyle}>{content}</h1>;
};

export default LessonTitle;
