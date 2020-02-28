import React from "react";

const LessonCode = params => {
  const codeStyle = {
    margin: "15px 0",
    padding: "3px 20px",
    backgroundColor: "lightgray"
  };
  return (
    <div style={codeStyle}>
      <pre>
        <code>{params.content}</code>
      </pre>
    </div>
  );
};

export default LessonCode;
