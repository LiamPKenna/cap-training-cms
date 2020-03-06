import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./NavDrawer";
import { Link } from "react-router-dom";

const NavBar = props => {
  const [drawer, setDrawer] = useState(false);

  const navStyle = {
    height: "75px",
    objectFit: "contain",
    border: "1px solid grey",
    display: "grid",
    gridTemplateColumns: "1fr 100px",
    width: "100%"
  };
  const imgStyle = {
    height: "50px",
    margin: "10px"
  };
  const h2Style = {
    margin: "25px 10px"
  };
  const makeHero = () => {
    return props.brand.logo ? (
      <img
        style={imgStyle}
        src={props.brand.logo}
        alt={`${props.brand.name} logo`}
      />
    ) : (
      <h2 style={h2Style}>{props.brand.name}</h2>
    );
  };

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(!drawer);
  };

  return (
    <>
      <div style={navStyle} className="nav-bar">
        <Link to="/">{makeHero()}</Link>
        <Button onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </Button>
      </div>
      <NavDrawer drawer={drawer} setDrawer={setDrawer} links={props.links} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    brand: state.brand,
    links: state.links
  };
};

export default connect(mapStateToProps)(NavBar);
