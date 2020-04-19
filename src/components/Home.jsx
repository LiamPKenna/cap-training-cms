import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

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

const LinkStyle = styled(Link)`
  text-decoration: none;
  text-align: center;
`;

const CourseLinkDiv = styled.div`
  margin: 2rem auto;
`;

const CourseLink = styled.h3`
  font-size: 2.5rem;
`;

const Home = () => {
  return (
    <>
      <Paper className="hero-div">
        <HeroDiv>
          <br />
          <BrandName>CAP Training CMS</BrandName>
          <SubHeading>Continuous | Accessible | Productive</SubHeading>
          <SubHeading>A training platform built for YOUR team!</SubHeading>
          <br />
        </HeroDiv>
      </Paper>
      <CourseLinkDiv>
        <LinkStyle to="/courses">
          <CourseLink>View Courses</CourseLink>
        </LinkStyle>
      </CourseLinkDiv>
    </>
  );
};

export default Home;
