import React from "react";
import { connect } from "react-redux";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const LessonInput = props => {
  const mainGridStyle = {
    display: "grid",
    gridTemplateColumns: "70px 1fr 60px 60px",
    backgroundColor: "#f5f5f5"
  };
  const upDownGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 60px 60px 60px 60px 60px"
  };
  const labelStyle = {
    textAlign: "center",
    margin: "0",
    padding: "10px 0 10px 0"
  };
  const inputStyle = {
    margin: "20px 0"
  };

  const handleSubmit = () => {
    props.toggleEdit();
  };

  return (
    <div style={inputStyle}>
      <Paper component="form">
        <div style={mainGridStyle}>
          <Button onClick={handleSubmit} color="primary">
            <CheckCircleIcon />
          </Button>
          <div>
            <h6 style={labelStyle}>{props.element.toUpperCase()}</h6>

            <TextField
              multiline
              value={props.value}
              onChange={props.handleChange}
              fullWidth
              variant="filled"
            />
            <div style={upDownGridStyle}>
              <div></div>
              <Button>
                <ArrowUpwardIcon />
              </Button>
              <Button>
                <ArrowDownwardIcon />
              </Button>
              <Button>
                <FormatAlignLeftIcon />
              </Button>
              <Button>
                <FormatAlignRightIcon />
              </Button>
              <Button>
                <FormatAlignCenterIcon />
              </Button>
            </div>
          </div>
          <Button color="primary">
            <CancelIcon />
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
