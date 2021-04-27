import React, { useEffect, useState, useCallback } from 'react';
import { BoxLoading } from 'react-loadingg';
import { Redirect } from 'react-router-dom';

import { checkCurrentAccessToken } from '../services/account-service';

const isAuth = (Component) =>
  function Comp(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fetchMyAPI = useCallback(async () => {
      const result = setIsLoggedIn(await checkCurrentAccessToken());

      if (result) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }, [isLoggedIn]);

    useEffect(() => {
      fetchMyAPI();
    }, [fetchMyAPI]);

    return isLoading ? <BoxLoading /> : isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
  };

const isNotAuth = (Component) =>
  function Comp(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const fetchMyAPI = useCallback(async () => {
      const result = setIsLoggedIn(await checkCurrentAccessToken());

      if (result) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    }, [isLoggedIn]);

    useEffect(() => {
      fetchMyAPI();
    }, [fetchMyAPI]);

    return isLoading ? <BoxLoading /> : isLoggedIn ? <Redirect to="/aboutMe" /> : <Component {...props} />;
  };

export { isAuth, isNotAuth };
