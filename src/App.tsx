import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Root from './view/Root/index';
import SignUp from './view/SignUp';
import Login from './view/Login';

interface AppProps {}

/**
 * App: Handles Routes and Main-Container of app
 */
function App({}: AppProps) {
  return (
    <Container className="App">
      <Route path="/join" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Root} />
    </Container>
  );
}

export default App;
