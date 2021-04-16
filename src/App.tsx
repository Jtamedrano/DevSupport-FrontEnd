import { Container } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Root from './view/Root/index';

interface AppProps {}

/**
 * App: Handles Routes and Main-Container of app
 */
function App({}: AppProps) {
  return (
    <Container className="App">
      <Route exact path="/" component={Root} />
    </Container>
  );
}

export default App;
