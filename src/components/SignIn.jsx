import React, { useState } from 'react';
import { auth } from '../firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import { addUser } from '../actions';
import { useDispatch } from 'react-redux';
import { Alert, AlertTitle } from '@material-ui/lab';
import styled from 'styled-components';

const SignInPaper = styled(Paper)`
  padding: 3rem;
  max-width: 30rem;
  margin: 3rem auto;
`;

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSignIn = e => {
    if (e) e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      const errorMessage = error.message;
      handleError(errorMessage);
    });
    history.push('/');
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        const errorMessage = error.message;
        handleError(errorMessage);
      })
      .then(dispatch(addUser(email)))
      .then(handleSignIn());
  };

  const handleError = errorMessage => {
    setError(true);
    setErrorText(errorMessage);
    setTimeout(() => {
      setError(false);
      setErrorText('');
    }, 5000);
  };

  return (
    <SignInPaper>
      {error ? (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {errorText}
        </Alert>
      ) : (
        ''
      )}
      <form action="" onSubmit={handleSignIn}>
        <TextField
          error={error}
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
          error={error}
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
    </SignInPaper>
  );
};

export default SignIn;
