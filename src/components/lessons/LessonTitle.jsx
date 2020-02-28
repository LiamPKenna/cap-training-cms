import React from "react";

const LessonTitle = params => {
  const { align } = params.format;
  const titleStyle = {
    textAlign: align
  };
  return <h1 style={titleStyle}>{params.content}</h1>;
};

export default LessonTitle;
