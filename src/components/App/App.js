/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BoxLoading } from 'react-loadingg';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Main from '../../pages/Main/Main';
import AboutMe from '../../pages/AboutMe/AboutMe';
import { isAuth, isNotAuth } from '../../helpers/isAuth';

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/aboutMe" component={isAuth(AboutMe)} />
        <Route exact path="/" component={isNotAuth(Main)} />
      </Switch>
    </div>
  );
}
export default App;
