import { Box, Button, CircularProgress, TextField } from '@material-ui/core';
import React, { FormEvent } from 'react';
import { useLoginMutation } from '../../generated/graphql';
import { Form, Formik } from 'formik';
import { InputGroup } from '../../components/InputGroup';
const Login: React.FC = () => {
  const [, login] = useLoginMutation();
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
        login;
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box marginY={4}>
            <InputGroup
              label="Username"
              name="username"
              placeholder="username"
            />
          </Box>
          <Box marginY={4}>
            <InputGroup
              label="Password"
              name="password"
              placeholder="password"
              type="password"
            />
          </Box>
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="outlined"
            color="primary"
          >
            {isSubmitting ? <CircularProgress size={24} /> : 'Login'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
