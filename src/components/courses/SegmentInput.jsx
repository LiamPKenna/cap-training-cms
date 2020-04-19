import React from 'react';
import { connect } from 'react-redux';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { courseActions } from '../../actions';
import styled from 'styled-components';

const InputDiv = styled.div`
  margin: 20px 0;
`;

const InputGridDiv = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 60px 60px;
  background-color: #f5f5f5;
`;

const InputLabelHeader = styled.h6`
  text-align: center;
  margin: 0;
  padding: 1rem 1.25rem;
`;

const SegmentInput = (props) => {
  const { courseId, dispatch, toggleEdit, value, handleChange } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      courseActions.updateSegmentName({
        name: value,
        courseId,
      })
    );
    toggleEdit();
  };

  const handleDelete = () => {
    const thingsToDelete = courseActions.deleteSegment({
      courseId,
      course: props.courses[courseId],
    });
    thingsToDelete.forEach((obj) => dispatch(obj));
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
            <br />
            <br />
            <br />
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

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps)(SegmentInput);
