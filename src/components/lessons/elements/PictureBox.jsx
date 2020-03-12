import React from 'react';
import styled from 'styled-components';
import ImageUpload from '../ImageUpload';

const MultiPicDiv = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
  }
  @media (min-width: 1150px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const SinglePicDiv = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
`;

const HeroImage = styled.img`
  margin: 20px 0;
  width: 100%;
`;

const GroupImage = styled.img`
  margin: 15px auto;
  min-width: 200px;
  max-width: 100%;
  align-self: center;
`;

const PictureBox = props => {
  const makePics = pics => {
    return pics.map((pic, index) =>
      props.mode === 1 ? (
        <HeroImage src={pic.src} alt={pic.alt} key={index} />
      ) : (
        <GroupImage src={pic.src} alt={pic.alt} key={index} />
      )
    );
  };
  return (
    <>
      {props.mode ? (
        <>
          {props.mode === 1 ? (
            <SinglePicDiv>{makePics(props.pictures)}</SinglePicDiv>
          ) : (
            <MultiPicDiv>{makePics(props.pictures)}</MultiPicDiv>
          )}
        </>
      ) : (
        <ImageUpload
          lessonId={props.lessonId}
          elementIndex={props.elementIndex}
        />
      )}
    </>
  );
};

export default PictureBox;
