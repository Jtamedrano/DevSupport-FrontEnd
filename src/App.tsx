import {
  Button,
  Container,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Root from './view/Root/index';
import SignUp from './view/SignUp';
import Login from './view/Login';
import { getSelectors } from './selectors';
import Header from './components/Header';
import BikeArt from './art/Newsletter.svg';

interface AppProps {}

const useStyles = makeStyles((theme: Theme) => ({
  windowWrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: '100vh',
  },
  headerWrapper: {
    flexShrink: 1,
  },
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    flex: '1',
  },
  rootWrapper: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    margin: '1em 0',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textWrapper: {
    flexBasis: '50%',
    textAlign: 'center',
  },
  imageWrapper: {
    flexBasis: '50%',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  bottomContentWrapper: {
    textAlign: 'center',
    height: '100%',
  },
}));

/**
 * App: Handles Routes and Main-Container of app
 */
function App({}: AppProps) {
  const classes = useStyles();
  const { isAuthenticated } = getSelectors().user;

  return (
    <div className={classes.windowWrapper}>
      <div className={classes.headerWrapper}>
        <Header />
      </div>
      <Container className={classes.container}>
        <Route path="/join" component={SignUp} />
        <Route path="/login" component={Login} />
      </Container>
      <Route exact path="/">
        {isAuthenticated ? (
          <Container className={classes.container}>
            <Root />
          </Container>
        ) : (
          <>
            <div className={classes.rootWrapper}>
              <div className={classes.textWrapper}>
                <Typography variant={'h2'}>
                  <div>Support</div>
                  <div>Accountability</div>
                  <div>Innovation</div>
                </Typography>
                <Typography variant={'subtitle1'}>
                  Getting answers should be as easy as counting 1,2,3...
                </Typography>
              </div>
              <div className={classes.imageWrapper}>
                <img className={classes.img} src={BikeArt} />
              </div>
            </div>
            <section>
              <div className={classes.bottomContentWrapper}>
                <Typography variant={'body1'}>
                  Gives teams the space to ask questions...
                </Typography>
                <Typography variant={'body1'}>
                  while giving admins a space to organize those questions
                </Typography>
              </div>
              <div className="custom-shape-divider-bottom-1619215760">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </section>
          </>
        )}
      </Route>
    </div>
  );
}

export default App;
