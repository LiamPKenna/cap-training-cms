import React from "react";
import LessonTextElement from "./LessonTextElement";

const makeElement = params => {
  const { element, index, lessonId, fullLessonContent } = params;
  return (
    <LessonTextElement
      key={index}
      elementIndex={index}
      lessonId={lessonId}
      fullLessonContent={fullLessonContent}
      element={element}
    />
  );
};

export default makeElement;
