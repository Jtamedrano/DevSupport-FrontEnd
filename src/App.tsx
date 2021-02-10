import { Route } from 'react-router';
import HeaderNav from './component/HeaderNav';
import LandingPageHome from './view/LandingPageHome';
import Login from './view/Login';
// View Imports
import UserHome from './view/UserHome';

const App = () => {
  return (
    <>
      <HeaderNav />
      <div className="app__contentContainer">
        <Route path="/home" component={UserHome} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={LandingPageHome} />
      </div>
    </>
  );
};

export default App;
