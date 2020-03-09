import React from "react";
import { connect } from "react-redux";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { updateText, deleteText } from "../../actions";
import styled from "styled-components";

const InputDiv = styled.div`
  margin: 20px 0;
`;

const InputGridDiv = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 60px 60px;
  background-color: #f5f5f5;
`;

const UpDownDiv = styled.div`
  display: grid;
  grid-template-columns: "60px 60px";
  margin: 0 auto;
`;

const InputLabelHeader = styled.h6`
  text-align: center;
  margin: 0;
  padding: 1rem 1.25rem;
`;

const CourseInput = props => {
  const { courseId, dispatch, toggleEdit, value, handleChange } = props;

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      courseId
    });
    // dispatch(
    //   updateText({
    //     courseIndex,
    //     content: value,
    //     courseId
    //   })
    // );
    dispatch({ type: "none" });
    toggleEdit();
  };

  const handleDelete = () => {
    console.log({
      courseId
    });

    // dispatch(
    //   deleteText({
    //     courseIndex,
    //     courseId,
    //   })
    // );
    toggleEdit();
  };

  return (
    <InputDiv>
      <Paper component="form" onSubmit={handleSubmit}>
        <InputGridDiv>
          <Button type="submit" color="primary">
            <CheckCircleIcon />
          </Button>
          <div>
            <InputLabelHeader>COURSE NAME</InputLabelHeader>
            <TextField
              required
              multiline
              value={value}
              onChange={handleChange}
              fullWidth
              variant="filled"
            />
            <UpDownDiv>
              <Button>
                <ArrowUpwardIcon />
              </Button>
              <Button>
                <ArrowDownwardIcon />
              </Button>
            </UpDownDiv>
          </div>
          <Button color="primary" onClick={toggleEdit}>
            <CancelIcon />
          </Button>
          <Button onClick={handleDelete}>
            <DeleteForeverIcon color="error" />
          </Button>
        </InputGridDiv>
      </Paper>
    </InputDiv>
  );
};

export default connect()(CourseInput);
