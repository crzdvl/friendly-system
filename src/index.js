import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import history from './helpers/history';
import App from './components/App/App';
import initFacebookSdk from './helpers/facebook-sdk';

initFacebookSdk();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root'),
);
