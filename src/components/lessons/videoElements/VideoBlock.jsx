import React from "react";
import styled from "styled-components";
import NewVideoForm from "./NewVideoForm";

const VideoDiv = styled.div`
  padding: 3%;
  background-color: black;
  margin-top: 1.5rem;
`;

const VideoWrapDiv = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
`;

const VideoFrame = styled.iframe`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoBlock = props => {
  return (
    <VideoDiv>
      {props.src ? (
        <VideoWrapDiv>
          <VideoFrame
            src={props.src}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
            title={props.title}
          ></VideoFrame>
        </VideoWrapDiv>
      ) : (
        <NewVideoForm />
      )}

      {/* <VideoFrame
          src="https://player.vimeo.com/video/396208451"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></VideoFrame> */}
    </VideoDiv>
  );
};

export default VideoBlock;
