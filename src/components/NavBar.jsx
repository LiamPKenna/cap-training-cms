import React from "react";
import AdminNav from "./nav/AdminNav";
import StudentNav from "./nav/StudentNav";

const NavBar = props => {
  return <div>{props.admin ? <AdminNav /> : <StudentNav />}</div>;
};

export default NavBar;
