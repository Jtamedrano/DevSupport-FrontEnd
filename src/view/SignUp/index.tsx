import { Button, TextField } from '@material-ui/core';
import React from 'react';

const Component = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField label="Username" />
        <TextField label="Email" />
        <TextField label="Password" type="password" />
        <TextField label="Confirm Password" type="password" />
        <Button>Sign Up</Button>
      </form>
    </>
  );
};

export default Component;
