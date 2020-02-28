import React from "react";
import LessonTitle from "./LessonTitle";
import LessonHeading from "./LessonHeading";
import LessonSub from "./LessonSub";
import LessonText from "./LessonText";
import LessonCode from "./LessonCode";
import PictureBox from "./PictureBox";

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
    case "code":
      return (
        <LessonCode
          key={index}
          content={element.content}
          format={element.format}
        />
      );
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
      return "";
  }
};

export default makeElement;
