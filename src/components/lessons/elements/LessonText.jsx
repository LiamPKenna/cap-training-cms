import React from "react";

const LessonText = params => {
  const textStyle = {
    fontSize: ".75rem",
    fontFamily: "roboto"
  };
  return (
    <div>
      <pre>
        <p style={textStyle}>{params.content}</p>
      </pre>
    </div>
  );
};

export default LessonText;
