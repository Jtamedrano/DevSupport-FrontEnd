import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Apollo Client Related Imports
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// Material UI Imports
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// File Imports
import App from './App';
// import Store from './Redux/store.ts';
import './style.css';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  uri: 'https://dev-support-jam.herokuapp.com/graphql',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
  credentials: 'include',
});

const theme = createMuiTheme();

ReactDOM.render(
  <ApolloProvider client={client}>
    {/* <Provider store={Store}> */}
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
    {/* </Provider>, */}
  </ApolloProvider>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
