import React from "react";
import makeElement from "./makeElement";

const makeSection = (section, index) => {
  const sectionStyle = {
    padding: "20px"
  };
  return (
    <div style={sectionStyle} key={index}>
      {section.map((l, i) => makeElement(l, i))}
    </div>
  );
};

export default makeSection;
