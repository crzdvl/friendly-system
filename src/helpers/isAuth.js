import React, { useEffect, useState } from 'react';
import { BoxLoading } from 'react-loadingg';
import { Redirect } from 'react-router-dom';

import { checkCurrentAccessToken } from '../services/account-service';

const isAuth = (Component) =>
  function Comp(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const result = checkCurrentAccessToken();

      if (result) {
        setIsLoading(false);
        setIsLoggedIn(true);
      } else {
        setIsLoading(false);
        setIsLoggedIn(false);
      }
    }, [isLoggedIn, isLoading]);

    return isLoading ? <BoxLoading /> : isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
  };

const isNotAuth = (Component) =>
  function Comp(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const result = checkCurrentAccessToken();

      if (result) {
        setIsLoading(false);
        setIsLoggedIn(true);
      } else {
        setIsLoading(false);
        setIsLoggedIn(false);
      }
    }, [isLoggedIn, isLoading]);

    return isLoading ? <BoxLoading /> : isLoggedIn ? <Redirect to="/aboutMe" /> : <Component {...props} />;
  };

export { isAuth, isNotAuth };
