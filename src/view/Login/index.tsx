import React, { FormEvent } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'src/component/styled-components';
import Form from 'src/component/styled-components/Form';

interface LoginViewProps {}

const LoginView: React.FC<LoginViewProps> = (props) => {
  const history = useHistory();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/home');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="inputGroup">
        <label htmlFor="usernameInput">Username</label>
        <input id="usernameInput" name="username" />
      </div>
      <div className="inputGroup">
        <label htmlFor="passwordInput">Password</label>
        <input type="password" id="passwordInput" name="password" />
      </div>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LoginView;
