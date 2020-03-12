import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import links from '../../constants/links';
import { signOut } from '../../actions';
import styled from 'styled-components';

const StyledDrawer = styled(Drawer)`
  position: fixed;
  right: 0;
  left: auto;
  width: 150px;
  box-sizing: inherit;
  background: rgba(0, 0, 0, 0);
  display: block;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const StyledList = styled(List)`
  background: #545454;
  color: white;
  height: 100vh;
`;

const NavDrawer = props => {
  return (
    <div>
      <StyledDrawer
        anchor="right"
        open={props.drawer}
        onClose={() => props.setDrawer(false)}
        onClick={() => props.setDrawer(false)}
      >
        <StyledList>
          {props.user ? (
            <>
              <ListItem button key="userEmail">
                <ListItemText primary={props.user.email} />
              </ListItem>
              <ListItem button key="signout" onClick={signOut}>
                <StyledLink to="/signin">
                  <ListItemText primary="Sign Out" />
                </StyledLink>
              </ListItem>
            </>
          ) : (
            ''
          )}
          {links.map((link, index) => (
            <ListItem button key={index}>
              <StyledLink to={link.path}>
                <ListItemText primary={link.text} />
              </StyledLink>
            </ListItem>
          ))}
          {props.admin ? (
            <ListItem button key="adminDashboard">
              <StyledLink to="/admin">
                <ListItemText primary="Admin Dashboard" />
              </StyledLink>
            </ListItem>
          ) : (
            ''
          )}
        </StyledList>
      </StyledDrawer>
    </div>
  );
};

export default NavDrawer;
