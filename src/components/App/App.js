/* eslint-disable no-unused-vars */
import cx from 'classnames';
import React, { useState } from 'react';
import { BoxLoading } from 'react-loadingg';
import { Redirect, Route, Switch } from 'react-router-dom';

import styles from './App.module.css';

import Main from '../../pages/Main/Main';
import AboutMe from '../../pages/AboutMe/AboutMe';
import { isAuth, isNotAuth } from '../../helpers/isAuth';
import ThemeContext from '../../contexts/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');
  const value = { theme, setTheme };

  const backgroundClass = cx({
    [styles.gradientBG]: true,
    [styles.light]: theme === 'light',
    [styles.dark]: theme === 'dark',
  });

  return (
    <div className={backgroundClass}>
      <ThemeContext.Provider value={value}>
        <Switch>
          <Route exact path="/aboutMe" component={isAuth(AboutMe)} />
          <Route exact path="/" component={isNotAuth(Main)} />
        </Switch>
      </ThemeContext.Provider>
    </div>
  );
}
export default App;
