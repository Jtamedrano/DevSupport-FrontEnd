import { Container } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router';
import Join from './components/Join';

function App() {
  return (
    <Container maxWidth="md">
      <Switch>
        <Route path="/join" component={Join} />
        <Route exact path="/" render={(props: {}) => <Redirect to="join" />} />
      </Switch>
    </Container>
  );
}

export default App;
