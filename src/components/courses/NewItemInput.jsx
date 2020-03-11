import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;
  gridtemplatecolumns: 70px 1fr 70px;
  backgroundcolor: #f5f5f5;
  border: 1px solid rgb(175, 174, 174);
`;

const NewItemInput = props => {
  const submitHandler = e => {
    e.preventDefault();
    props.handleSubmit();
  };
  return (
    <Paper component="form" onSubmit={submitHandler}>
      <MainGrid>
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
      </MainGrid>
    </Paper>
  );
};

export default NewItemInput;
