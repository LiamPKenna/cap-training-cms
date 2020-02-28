import React from 'react';
import LessonTitle from './lessons/LessonTitle';
import LessonHeading from './lessons/LessonHeading';
import LessonSub from './lessons/LessonSub';
import LessonText from './lessons/LessonText';

const testLesson = [
  {
    type: "title",
    content: "This is a title",
    format: {
      align: "left"
    }
  },
  {
    type: "heading",
    content: "This is a heading",
    format: {
      align: "left"
    }
  },
  {
    type: "subHeading",
    content: "This is a sub heading",
    format: {
      align: "left"
    }
  },
  {
    type: "text",
    content: "This is normal text",
    format: {
      align: "left"
    }
  },
];

const makePage = (lesson) =>  lesson.map((l,i) => makeElement(l,i));

const makeElement = (element, index) => {
  switch (element.type) {
    case "title":
      return (<LessonTitle key={index} content={element.content} />);
    case "heading":
      return <LessonHeading key={index} content={element.content} />;
    case "subHeading":
      return <LessonSub key={index} content={element.content} />;
    case "text":
      return <LessonText key={index} content={element.content} />;
    default:
      return '';
  }
}

const Lesson = (params) => {
  return (
    <div>
      {makePage(testLesson)}
    </div>
  )
}

console.log(makePage(testLesson));

export default Lesson;