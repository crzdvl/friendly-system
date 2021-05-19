import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store/store';
import history from './helpers/history';
import App from './components/App/App';
import initFacebookSdk from './helpers/facebook-sdk';

import './i18n/i18n';

function startApp() {
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>,
    </Provider>,
    document.getElementById('root'),
  );
}

initFacebookSdk().then(startApp);
