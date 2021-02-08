import { Route } from 'react-router';
import HeaderNav from './component/HeaderNav';

// View Imports
import Home from './view/Home';

const App = () => {
  return (
    <div>
      <HeaderNav />
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default App;
