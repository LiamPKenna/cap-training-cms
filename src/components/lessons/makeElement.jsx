import React from "react";
import LessonTitle from "./LessonTitle";
import LessonHeading from "./LessonHeading";
import LessonSub from "./LessonSub";
import LessonText from "./LessonText";

const makeElement = (element, index) => {
  switch (element.type) {
    case "title":
      return (
        <LessonTitle
          key={index}
          content={element.content}
          format={element.format}
        />
      );
    case "heading":
      return (
        <LessonHeading
          key={index}
          content={element.content}
          format={element.format}
        />
      );
    case "subHeading":
      return (
        <LessonSub
          key={index}
          content={element.content}
          format={element.format}
        />
      );
    case "text":
      return (
        <LessonText
          key={index}
          content={element.content}
          format={element.format}
        />
      );
    default:
      return "";
  }
};

export default makeElement;
