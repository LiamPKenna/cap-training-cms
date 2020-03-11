import React from 'react';
import styled from 'styled-components';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

const CheckDiv = styled.div`
  color: lightgreen;
  margin-left: 1rem;
  display: inline;
  font-size: 1rem;
`;

const CheckMark = () => {
  return (
    <CheckDiv>
      <DoneOutlineIcon fontSize="small" />
    </CheckDiv>
  );
};

export default CheckMark;
