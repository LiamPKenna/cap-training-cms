import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

const NewItemInput = props => {
  const mainGridStyle = {
    display: "grid",
    gridTemplateColumns: "70px 1fr 70px",
    backgroundColor: "#f5f5f5"
  };
  return (
    <Paper component="form" onSubmit={props.handleSubmit}>
      <div style={mainGridStyle}>
        <Button type="submit" color="primary">
          <CheckCircleIcon />
        </Button>
        <TextField
          required
          label={props.inputName}
          value={props.value}
          onChange={props.handleChange}
          fullWidth
          variant="filled"
        />
        <Button onClick={props.handleCancel} color="primary">
          <CancelIcon />
        </Button>
      </div>
    </Paper>
  );
};

export default NewItemInput;
