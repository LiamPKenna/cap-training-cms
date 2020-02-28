import React from "react";
import makeSection from "./lessons/makeSection";

const makePage = lesson => lesson.map((l, i) => makeSection(l, i));

const Lesson = props => {
  return <div>{makePage(props.lesson)}</div>;
};

export default Lesson;
