import React from "react";
import { connect } from "react-redux";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";

const LessonInput = props => {
  const divStyle = {
    display: "grid",
    gridTemplateColumns: "70px 1fr 60px 60px"
  };
  const labelStyle = {
    textAlign: "center",
    margin: "0",
    padding: "10px 0 2px 0"
  };

  const handleSubmit = () => {
    props.toggleEdit();
  };

  return (
    <div>
      <Paper component="form">
        <div style={divStyle}>
          <Button onClick={handleSubmit}>
            <CheckCircleIcon color="primary" />
          </Button>
          <div>
            <h6 style={labelStyle}>{props.element.toUpperCase()}</h6>

            <InputBase
              multiline
              value={props.value}
              onChange={props.handleChange}
              fullWidth
            />
          </div>
          <Button>
            <CancelIcon color="primary" />
          </Button>
          <Button>
            <DeleteForeverIcon color="error" />
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default connect()(LessonInput);
