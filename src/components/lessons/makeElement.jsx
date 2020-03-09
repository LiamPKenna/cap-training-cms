import React from "react";
import LessonTextElement from "./LessonTextElement";
import PictureBox from "./elements/PictureBox";
import Break from "./elements/Break";

const makeElement = (element, index, lessonId, fullLessonContent) => {
  switch (element.type) {
    case "picture":
      return (
        <PictureBox
          key={index}
          mode={element.mode}
          pictures={element.pictures}
          lessonId={lessonId}
          fullLessonContent={fullLessonContent}
          elementIndex={index}
        />
      );
    case "break":
      return <Break key={index} />;
    case "default":
      return "";
    default:
      return (
        <LessonTextElement
          key={index}
          elementIndex={index}
          lessonId={lessonId}
          content={element.content}
          format={element.format}
          type={element.type}
          fullLessonContent={fullLessonContent}
        />
      );
  }
};

export default makeElement;
