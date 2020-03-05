import React from "react";

const PictureBox = props => {
  const pictureBoxStyles = {
    width: "100%",
    overflow: "hidden"
  };
  const imgStyles = {
    1: {
      margin: "20px 0",
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
    <div className={`picture-box-${props.mode}`} style={pictureBoxStyles}>
      <style>{`
        .picture-box-2 {
          display: block;
        }
        @media (min-width: 800px) {
          .picture-box-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 15px;
          }
        }
        @media (min-width: 1150px) {
          .picture-box-2 {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
      {makePics(props.pictures)}
    </div>
  );
};

export default PictureBox;
