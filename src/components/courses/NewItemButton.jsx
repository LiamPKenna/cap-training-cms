import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  padding: 1rem auto;
  margin: 1rem auto;
`;

const NewItemButton = props => {
  return (
    <ButtonDiv>
      <Button
        variant="contained"
        color="primary"
        onClick={props.clickHandler}
        title={props.title}
      >
        {props.text ? props.text : <AddCircleIcon fontSize={'large'} />}
      </Button>
    </ButtonDiv>
  );
};

export default NewItemButton;
