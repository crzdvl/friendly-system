import React, { useState } from 'react';
import { BoxLoading } from 'react-loadingg';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Main from '../../pages/Main/Main';
import AboutMe from '../../pages/AboutMe/AboutMe';

import { checkCurrentAccessToken } from '../../services/account-service';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  checkCurrentAccessToken().then((result) => {
    if (result) {
      setIsLoading(false);
      setIsLoggedIn(true);
    } else {
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  });

  return (
    <div className="page">
      <Switch>
        {isLoading ? (
          <BoxLoading />
        ) : isLoggedIn ? (
          <Switch>
            <Route exact path="/aboutMe" component={AboutMe} />
            <Redirect to="/aboutMe" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        )}
      </Switch>
    </div>
  );
}
export default App;
