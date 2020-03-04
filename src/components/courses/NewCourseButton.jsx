import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const NewCourseButton = props => {
  const buttonStyle = {
    borderRadius: "50%",
    border: "none",
    backgroundColor: "rgba(0,0,0,0)",
    color: "grey",
    margin: "0.25rem .5rem"
  };
  return (
    <button
      style={buttonStyle}
      onClick={props.clickHandler}
      title={props.title}
    >
      <AddCircleIcon fontSize={"large"} />
    </button>
  );
};

export default NewCourseButton;
