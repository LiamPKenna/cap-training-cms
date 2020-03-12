import React from 'react';
import styled from 'styled-components';

const BrandImg = styled.img`
  height: 50px;
  margin: 10px;
`;

const BrandNameHeading = styled.h1`
  margin: 0.75rem 10px;
  color: black;
`;

const BrandHero = props => {
  if (!props.logo) {
    return <BrandNameHeading>{props.name}</BrandNameHeading>;
  } else {
    return <BrandImg src={props.logo} alt={`${props.name} logo`} />;
  }
};

export default BrandHero;
