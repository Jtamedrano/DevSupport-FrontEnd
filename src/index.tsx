import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Material UI Imports
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// File Imports
import App from './App';
// import Store from './Redux/store.ts';
import './style.css';

const theme = createMuiTheme();

ReactDOM.render(
  // <Provider store={Store}>
  <Router>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Router>,
  // </Provider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
