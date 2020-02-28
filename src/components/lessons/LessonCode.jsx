import React from "react";

const LessonCode = params => {
  return (
    <pre>
      <code>{params.content}</code>
    </pre>
  );
};

export default LessonCode;
