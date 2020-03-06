import React from "react";
import styled from "styled-components";

const LoadingDiv = styled.div`
  padding-top: 6rem;
  text-align: center;
`;

const Loading = () => {
  return (
    <LoadingDiv>
      <h2>LOADING...</h2>
    </LoadingDiv>
  );
};

export default Loading;
