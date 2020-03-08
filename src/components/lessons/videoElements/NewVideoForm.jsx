import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import styled from "styled-components";

const MainGridDiv = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 70px;
  background-color: #f5f5f5;
`;

const NewVideoForm = props => {
  const submitHandler = e => {
    e.preventDefault();
    props.handleSubmit();
  };

  const handleDelete = () => {
    console.log("delete");
  };
  return (
    <Paper component="form" onSubmit={submitHandler}>
      <MainGridDiv>
        <Button type="submit" color="primary">
          <CheckCircleIcon />
        </Button>
        <div>
          <TextField
            required
            label="Video URL"
            value={props.value}
            onChange={props.handleChange}
            fullWidth
            variant="filled"
          />
          <TextField
            required
            label="Video Title"
            value={props.value}
            onChange={props.handleChange}
            fullWidth
            variant="filled"
          />
        </div>
        <Button onClick={handleDelete}>
          <DeleteForeverIcon color="error" />
        </Button>
      </MainGridDiv>
    </Paper>
  );
};

export default NewVideoForm;
