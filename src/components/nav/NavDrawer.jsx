import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const NavDrawer = props => {
  const drawerStyle = {
    position: "fixed",
    right: "0",
    left: "auto",
    width: "150px",
    boxSizing: "inherit",
    background: "rgba(0,0,0,0)",
    display: "block"
  };
  const drawerListStyle = {
    background: "#545454",
    color: "white",
    height: "100vh"
  };
  const linkStyle = {
    textDecoration: "none",
    color: "white"
  };

  return (
    <div>
      <Drawer
        style={drawerStyle}
        anchor="right"
        open={props.drawer}
        onClose={() => props.setDrawer(false)}
        onClick={() => props.setDrawer(false)}
      >
        <List style={drawerListStyle}>
          {props.links.map((link, index) => (
            <ListItem button key={index}>
              <Link to={link.path} style={linkStyle}>
                <ListItemText primary={link.text} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
