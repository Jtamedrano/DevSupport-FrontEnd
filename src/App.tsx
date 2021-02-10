import { Route } from 'react-router';
import HeaderNav from './component/HeaderNav';
import LandingPageHome from './view/LandingPageHome';

// View Imports
import UserHome from './view/UserHome';

const App = () => {
  return (
    <>
      <HeaderNav />
      <div className="app__contentContainer">
        <Route path="/home" component={UserHome} />
        <Route exact path="/" component={LandingPageHome} />
      </div>
    </>
  );
};

export default App;
