import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);

      // ...
    });
  };

  useEffect(() => {
    auth.signOut();
  });

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });
  };
  return (
    <div>
      <form action="" onSubmit={handleSignIn}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={e => setEmail(e.target.value)}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </form>
      <br />
      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default SignIn;