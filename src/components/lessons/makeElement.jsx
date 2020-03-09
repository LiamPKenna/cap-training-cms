import React from "react";
import LessonElement from "./LessonElement";

const makeElement = params => {
  const { element, index, lessonId, fullLessonContent } = params;
  return (
    <LessonElement
      key={index}
      elementIndex={index}
      lessonId={lessonId}
      fullLessonContent={fullLessonContent}
      element={element}
    />
  );
};

export default makeElement;
