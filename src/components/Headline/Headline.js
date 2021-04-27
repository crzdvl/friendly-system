import React, { useContext } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import ThemeContext from '../../contexts/ThemeContext';
import styles from './Headline.module.css';

const Headline = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  const headlineClass = cx({
    [styles.headline]: true,
    [styles.light]: theme === 'light',
    [styles.dark]: theme === 'dark',
  });

  return <h1 className={headlineClass}>{text}</h1>;
};

Headline.propTypes = {
  text: propTypes.string.isRequired,
};

export default Headline;
