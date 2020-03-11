import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const PencilDiv = styled.div`
  margin: 0;
  position: absolute;
  left: 0.25rem;
  opacity: 0;
  :hover {
    opacity: 1;
  }
`;

const EditButton = props => {
  return (
    <PencilDiv>
      <Button variant="contained" color="primary" onClick={props.handleClick}>
        <EditIcon fontSize="small" />
      </Button>
    </PencilDiv>
  );
};

export default EditButton;
