import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouterForLoggedInUser = ({
  component: Component,
  isLoggedIn,
  isLoading,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }
  return <Component />;
};

RouterForLoggedInUser.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RouterForLoggedInUser;
