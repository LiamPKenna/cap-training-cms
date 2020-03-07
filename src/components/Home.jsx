import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/courses",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};

const Home = () => {
  return (
    <div>
      <h1>Hi</h1>
      <h4>This is the home page</h4>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default Home;
