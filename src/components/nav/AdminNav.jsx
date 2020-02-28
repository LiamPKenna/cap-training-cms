import React from "react";

const AdminNav = props => {
  const navStyle = {
    height: "75px",
    objectFit: "contain",
    border: "1px solid grey"
  };
  const imgStyle = {
    height: "50px",
    margin: "10px"
  };
  const h2Style = {
    margin: "25px 10px"
  };
  const makeHero = () => {
    return props.logo ? (
      <img style={imgStyle} src={props.logo} alt={`${props.brand} logo`} />
    ) : (
      <h2 style={h2Style}>{props.brand}</h2>
    );
  };

  return <div style={navStyle}>{makeHero()}</div>;
};

export default AdminNav;
