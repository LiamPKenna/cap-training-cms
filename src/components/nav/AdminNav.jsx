import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const AdminNav = props => {
  const [drawer, setDrawer] = useState(false);

  const navStyle = {
    height: "75px",
    objectFit: "contain",
    border: "1px solid grey",
    display: "grid",
    gridTemplateColumns: "1fr 100px",
    width: "100%"
  };
  const drawerStyle = {
    position: "fixed",
    right: "0",
    left: "auto",
    width: "150px",
    boxSizing: "inherit",
    background: "#545454",
    display: "block"
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
    <div>
      <div style={navStyle}>
        {makeHero()}
        <Button onClick={toggleDrawer("right", true)}>=</Button>
      </div>
      <Drawer
        style={drawerStyle}
        anchor="right"
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map(text => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default AdminNav;
