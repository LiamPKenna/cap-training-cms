import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import NavDrawer from "./NavDrawer";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "../../actions";

const NavDiv = styled.div`
  height: 75px;
  object-fit: contain;
  border: 1px solid rgb(175, 174, 174);
  display: grid;
  grid-template-columns: 1fr 200px 100px;
  width: 100%;
`;

const BrandImg = styled.img`
  height: 50px;
  margin: 10px;
`;

const UserEmailDiv = styled.div`
  text-align: right;
  padding-top: 1rem;
`;

const BrandNameHeading = styled.img`
  margin: 25px 10px;
`;

const NavBar = props => {
  const [drawer, setDrawer] = useState(false);

  const makeHero = () => {
    return props.brand.logo ? (
      <BrandImg src={props.brand.logo} alt={`${props.brand.name} logo`} />
    ) : (
      <BrandNameHeading>{props.brand.name}</BrandNameHeading>
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
      <NavDiv className="nav-bar">
        <Link to="/">{makeHero()}</Link>
        <UserEmailDiv>
          {props.user ? (
            <>
              {props.user.email}
              <br />
              <Link to="/signin" onClick={signOut}>
                Sign Out
              </Link>
            </>
          ) : (
            ""
          )}
        </UserEmailDiv>
        <Button onClick={toggleDrawer("right", true)}>
          <MenuIcon />
        </Button>
      </NavDiv>
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
