import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const HeroDiv = styled.div`
  margin: 5rem 1rem;
  text-align: center;
  @media (min-width: 800px) {
    margin 5rem 8rem;
  }
`;

const BrandName = styled.h1`
  font-size: 3.5rem;
`;

const SubHeading = styled.h4`
  margin: 1rem auto;
`;

const Home = () => {
  return (
    <Paper>
      <HeroDiv>
        <br />
        <BrandName>CAP Training CMS</BrandName>
        <SubHeading>Continuous Accessable Productive</SubHeading>
        <SubHeading>A training platform built for YOUR team!</SubHeading>
        <br />
      </HeroDiv>
    </Paper>
  );
};

export default Home;
