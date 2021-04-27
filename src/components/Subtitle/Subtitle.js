import React, { useContext } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import ThemeContext from '../../contexts/ThemeContext';
import styles from './Subtitle.module.css';

const Subtitle = ({ text }) => {
  const { theme } = useContext(ThemeContext);
  const subtitleClass = cx({
    [styles.Subtitle]: true,
    [styles.light]: theme === 'light',
    [styles.dark]: theme === 'dark',
  });

  return <p className={subtitleClass}>{text}</p>;
};

Subtitle.propTypes = {
  text: propTypes.string.isRequired,
};

export default Subtitle;
