import React from "react";
import LessonTextElement from "./LessonTextElement";
import PictureBox from "./PictureBox";

const makeElement = (element, index, lessonId) => {
  switch (element.type) {
    case "picture":
      return (
        <PictureBox
          key={index}
          mode={element.mode}
          pictures={element.pictures}
        />
      );
    case "break":
      return (
        <div key={index}>
          <br />
          <hr />
          <br />
        </div>
      );
    default:
      return (
        <LessonTextElement
          key={index}
          sectionIndex={index}
          lessonId={lessonId}
          content={element.content}
          format={element.format}
          type={element.type}
        />
      );
  }
};

export default makeElement;
