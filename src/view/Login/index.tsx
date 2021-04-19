import { Button, TextField } from '@material-ui/core';
import React from 'react';

const Login: React.FC = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TextField required id="username" label="Username" />
      <TextField required id="password" label="Password" />
      <Button type="submit" variant="outlined" color="primary">
        Login
      </Button>
    </form>
  );
};

export default Login;
