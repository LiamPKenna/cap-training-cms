import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

const EditButton = props => {
  const buttonStyle = {
    position: "absolute",
    left: "0"
  };
  return (
    <Button style={buttonStyle} onClick={props.handleClick}>
      <EditIcon />
    </Button>
  );
};

export default EditButton;
