import React, { useState } from "react";
import LessonInput from "./LessonInput";
import EditButton from "./EditButton";
import LessonTitle from "./LessonTitle";
import LessonHeading from "./LessonHeading";
import LessonSub from "./LessonSub";
import LessonText from "./LessonText";
import LessonCode from "./LessonCode";

const LessonTextElement = props => {
  const admin = true;
  const { format, content } = props;
  const [text, setText] = useState(content);
  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode(!editMode);
    setText(content);
  };

  const elementStyle = {
    paddingLeft: admin && !editMode ? "70px" : "0"
  };

  const checkEdit = () => {
    return editMode ? (
      <LessonInput
        value={text}
        handleChange={e => setText(e.target.value)}
        toggleEdit={toggleEdit}
        element={props.type}
      />
    ) : (
      <div>
        {admin ? <EditButton handleClick={toggleEdit} /> : ""}
        {pickElement()}
      </div>
    );
  };

  const pickElement = () => {
    switch (props.type) {
      case "title":
        return <LessonTitle content={content} format={format} />;
      case "heading":
        return <LessonHeading content={content} format={format} />;
      case "subHeading":
        return <LessonSub content={content} format={format} />;
      case "text":
        return <LessonText content={content} format={format} />;
      case "code":
        return <LessonCode content={content} format={format} />;
      default:
        return "";
    }
  };

  return <div style={elementStyle}>{checkEdit()}</div>;
};

export default LessonTextElement;