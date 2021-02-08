import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// components
import { useLoginMutation } from '../../generated/graphql';
import InputField from '../../components/InputField';

// style
import './style.scss';

interface Props {}

const Login: React.FC<Props> = () => {
  const [, login] = useLoginMutation();
  const history = useHistory();

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={async (values) => {
        const response = await login(values);
        console.log(response);
        if (response.data?.login.user?.username) {
          history.push('/');
        }
      }}
    >
      {() => (
        <>
          <h1>Login</h1>
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
              groupClass="usernameInputGroup"
            />
            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
              groupClass="passwordInputGroup"
            />
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </Form>
        </>
      )}
    </Formik>
  );
};

export default Login;
