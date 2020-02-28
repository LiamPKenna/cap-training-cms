import React from "react";
import makeElement from "./lessons/makeElement";
import testLesson from "./testLesson";

const makePage = lesson => lesson.map((l, i) => makeElement(l, i));

const Lesson = params => {
  return <div>{makePage(testLesson)}</div>;
};

export default Lesson;
