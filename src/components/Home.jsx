import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { ui, uiConfig } from "../firebase";

const Home = () => {
  return (
    <div>
      <h1>Hi</h1>
      <h4>This is the home page</h4>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={ui} />
    </div>
  );
};

export default Home;
