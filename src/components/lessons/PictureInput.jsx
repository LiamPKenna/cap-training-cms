import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import styled from 'styled-components';

const MainGridDiv = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 70px;
  background-color: #f5f5f5;
`;

const NewItemInput = props => {
  const submitHandler = e => {
    e.preventDefault();
    props.handleSubmit();
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
            label="Picture URL"
            value={props.urlValue}
            onChange={props.handleUrlChange}
            fullWidth
            variant="filled"
          />
          <TextField
            required
            label="Alt Text"
            value={props.altValue}
            onChange={props.handleAltChange}
            fullWidth
            variant="filled"
          />
        </div>
        <Button onClick={props.handleCancel} color="primary">
          <CancelIcon />
        </Button>
      </MainGridDiv>
    </Paper>
  );
};

export default NewItemInput;
