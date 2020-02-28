import React from "react";
import makeSection from "./lessons/makeSection";
import testLesson from "./testLesson";

const makePage = lesson => lesson.map((l, i) => makeSection(l, i));

const Lesson = params => {
  return <div>{makePage(testLesson)}</div>;
};

export default Lesson;
