import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import NavDrawer from './NavDrawer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BrandHero from './BrandHero';

const NavDiv = styled.div`
  height: 75px;
  object-fit: contain;
  display: grid;
  grid-template-columns: 1fr 100px;
  width: 100%;
`;

const NavBar = props => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawer(!drawer);
  };

  return (
    <>
      <NavDiv className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <BrandHero name={props.brand.name} logo={props.brand.logo} />
        </Link>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon className="hamburger" />
        </Button>
      </NavDiv>
      <NavDrawer
        drawer={drawer}
        setDrawer={setDrawer}
        links={props.links}
        user={props.user}
        admin={props.admin}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    brand: state.brand,
    links: state.links,
    admin: state.users.admin,
  };
};

export default connect(mapStateToProps)(NavBar);
