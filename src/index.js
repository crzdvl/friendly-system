import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import history from './helpers/history';
import App from './components/App/App';
import initFacebookSdk from './helpers/facebook-sdk';
import './i18n/i18n';

function startApp() {
  render(
    <Router history={history}>
      <App />
    </Router>,
    document.getElementById('root'),
  );
}

initFacebookSdk().then(startApp);
