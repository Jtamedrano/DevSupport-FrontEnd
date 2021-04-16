import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Root from './view/Root/index';
import Login from './view/Login';

interface AppProps {}

/**
 * App: Handles Routes and Main-Container of app
 */
function App({}: AppProps) {
  return (
    <Container className="App">
      <Switch>
        <Route exact path="/">
          <Root />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
