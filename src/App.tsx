import { Route } from 'react-router';
import HeaderNav from './component/HeaderNav';

// View Imports
import Home from './view/Home';

const App = () => {
  return (
    <>
      <HeaderNav />
      <div className="app__contentContainer">
        <Route exact path="/" component={Home} />
      </div>
    </>
  );
};

export default App;
