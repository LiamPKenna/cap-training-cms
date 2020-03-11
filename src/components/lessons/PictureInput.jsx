import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const NewItemInput = props => {
  const mainGridStyle = {
    display: 'grid',
    gridTemplateColumns: '70px 1fr 70px',
    backgroundColor: '#f5f5f5'
  };
  const submitHandler = e => {
    e.preventDefault();
    props.handleSubmit();
  };
  return (
    <Paper component="form" onSubmit={submitHandler}>
      <div style={mainGridStyle}>
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
      </div>
    </Paper>
  );
};

export default NewItemInput;
