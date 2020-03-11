import React from 'react';
import styled from 'styled-components';

const StyledBackLink = styled.h3`
  text-align: center;
  margin-top: 2rem;
`;

const BackLink = props => {
  console.log(props.text);

  return (
    <div>
      <StyledBackLink>{props.text}</StyledBackLink>
    </div>
  );
};

export default BackLink;
