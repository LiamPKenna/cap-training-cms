import React from "react";
import AdminNav from "./nav/AdminNav";
import StudentNav from "./nav/StudentNav";
import { connect } from "react-redux";

const NavBar = props => {
  return (
    <div>
      {props.admin ? <AdminNav {...props} /> : <StudentNav {...props} />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    brand: state.brand,
    logo: state.logo
  };
};

export default connect(mapStateToProps)(NavBar);
