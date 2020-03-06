import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";

const EditButton = props => {
  const buttonStyle = {
    position: "absolute",
    left: ".25rem"
  };
  return (
    <Button
      variant="contained"
      color="primary"
      style={buttonStyle}
      className="edit-button"
      onClick={props.handleClick}
    >
      <style>{`
          .edit-button {
            opacity: 0
          }
          .edit-button:hover {
            opacity: 1
          }
      `}</style>
      <EditIcon />
    </Button>
  );
};

export default EditButton;
