import React from "react";

const PictureBox = props => {
  const pictureBoxStyles = {
    display: "flex",
    width: "100%",
    flexBasis: "0",
    flex: "0 0 50%",
    flex: "1 0 50%"
  };
  const imgStyles = {
    1: {
      margin: "15px 0",
      width: "100%"
    },
    2: {
      minWidth: "300px",
      maxWidth: "100%"
    }
  };
  const makePics = pics => {
    return pics.map((pic, index) => (
      <img
        style={imgStyles[props.mode]}
        src={pic.src}
        alt={pic.alt}
        key={index}
      />
    ));
  };
  return <div style={pictureBoxStyles}>{makePics(props.pictures)}</div>;
};

export default PictureBox;
