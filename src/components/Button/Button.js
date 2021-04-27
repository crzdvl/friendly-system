import React, { useContext } from 'react';
import propTypes from 'prop-types';
import cx from 'classnames';

import ThemeContext from '../../contexts/ThemeContext';
import styles from './Button.module.css';

const Button = ({ name, handleClick }) => {
  const { theme } = useContext(ThemeContext);
  const btnClass = cx({
    [styles.button]: true,
    [styles.light]: theme === 'light',
    [styles.dark]: theme === 'dark',
  });

  return (
    <button className={btnClass} type="button" onClick={handleClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
};

export default Button;
