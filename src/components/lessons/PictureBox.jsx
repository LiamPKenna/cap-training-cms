import React from "react";

const PictureBox = props => {
  const pictureBoxStyles = {
    1: {
      width: "100%"
    },
    2: {
      display: "flex",
      width: "100%",
      overflow: "hidden",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  };
  const imgStyles = {
    1: {
      margin: "15px 0",
      width: "100%"
    },
    2: {
      margin: "15px auto",
      minWidth: "200px",
      maxWidth: "100%",
      alignSelf: "center"
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
  return (
    <div style={pictureBoxStyles[props.mode]}>{makePics(props.pictures)}</div>
  );
};

export default PictureBox;
