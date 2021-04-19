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
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={Root} />
      <Route path="/login" component={Login}>
        <Login />
      </Route>
    </Container>
  );
}

export default App;
