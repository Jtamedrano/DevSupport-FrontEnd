import { Box, Button, Paper } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { InputGroup } from '../../components/InputGroup';
import './style.scss';

interface SignUpProps {}

const Component: React.FC<SignUpProps> = ({}) => {
  return (
    <Paper>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ username: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange }) => (
          <form id="signup-form">
            <Box width={'100%'}>
              <InputGroup
                name="username"
                placeholder="username"
                label="Username"
              />
            </Box>
            <Box width={'100%'}>
              <InputGroup
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Box width={'100%'}>
              <InputGroup
                name="confirmPassword"
                placeholder="confirm password"
                label="Confirm Password"
                type="password"
              />
            </Box>
            <Box>
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default Component;
