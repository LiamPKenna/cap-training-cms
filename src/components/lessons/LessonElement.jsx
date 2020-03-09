import React, { useState } from "react";
import LessonInput from "./LessonInput";
import EditButton from "../utilities/EditButton";
import LessonTitle from "./elements/LessonTitle";
import LessonHeading from "./elements/LessonHeading";
import LessonSub from "./elements/LessonSub";
import LessonText from "./elements/LessonText";
import LessonCode from "./elements/LessonCode";
import Break from "./elements/Break";
import PictureBox from "./elements/PictureBox";

const LessonTextElement = props => {
  const { element, lessonId, elementIndex, fullLessonContent, admin } = props;
  const [text, setText] = useState(element.content ? element.content : null);
  const [align, setAlign] = useState(
    element.format ? element.format.align : null
  );
  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode(!editMode);
    setText(element.content ? element.content : null);
    setAlign(element.format ? element.format.align : null);
  };

  const checkEdit = () => {
    return editMode ? (
      <LessonInput
        value={text}
        handleChange={e => setText(e.target.value)}
        toggleEdit={toggleEdit}
        element={element.type}
        align={align}
        changeAlign={setAlign}
        elementIndex={elementIndex}
        lessonId={lessonId}
        fullLessonContent={fullLessonContent}
      />
    ) : (
      <div>
        {admin ? <EditButton handleClick={toggleEdit} /> : ""}
        {pickElement()}
      </div>
    );
  };

  const pickElement = () => {
    switch (element.type) {
      case "title":
        return (
          <LessonTitle content={element.content} format={element.format} />
        );
      case "heading":
        return (
          <LessonHeading content={element.content} format={element.format} />
        );
      case "subHeading":
        return <LessonSub content={element.content} format={element.format} />;
      case "text":
        return <LessonText content={element.content} format={element.format} />;
      case "code":
        return <LessonCode content={element.content} format={element.format} />;
      case "break":
        return <Break />;
      case "picture":
        return (
          <PictureBox
            mode={element.mode}
            pictures={element.pictures}
            elementIndex={elementIndex}
            lessonId={lessonId}
            fullLessonContent={fullLessonContent}
          />
        );
      default:
        return "";
    }
  };

  return <div>{checkEdit()}</div>;
};

export default LessonTextElement;
