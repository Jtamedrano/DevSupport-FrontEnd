import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import Join from './view/Join';
import Login from './view/login';

function App() {
  return (
    <Container maxWidth="md">
      <Switch>
        <Route path="/join" component={Join} />
        <Route path="/login" component={Login} />
        <Route exact path="/">
          <>
            <p>Home</p>
          </>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
