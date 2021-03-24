import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouterForNotLoggedInUser = ({
  component: Component,
  isLoggedIn,
  isLoading,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isLoggedIn) {
    return <Redirect to="/aboutMe" />;
  }
  return <Component />;
};

RouterForNotLoggedInUser.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RouterForNotLoggedInUser;
