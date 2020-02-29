import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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

  return (
    <div>
      <Drawer
        style={drawerStyle}
        anchor="right"
        open={props.drawer}
        onClose={() => props.setDrawer(false)}
      >
        <List style={drawerListStyle}>
          {["Home", "All Courses", "This is a test for a long link"].map(
            text => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
