import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";

const NewItemButton = props => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={props.clickHandler}
      title={props.title}
    >
      {props.text ? props.text : <AddCircleIcon fontSize={"large"} />}
    </Button>
  );
};

export default NewItemButton;
