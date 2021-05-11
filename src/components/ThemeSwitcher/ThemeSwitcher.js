import cx from 'classnames';
import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import ThemeContext from '../../contexts/ThemeContext';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const iconClass = cx({
    [styles.icon]: true,
    [styles.sunIcon]: theme === 'light',
    [styles.moonIcon]: theme === 'dark',
  });

  const handleChangeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return theme === 'dark' ? (
    <FontAwesomeIcon icon={faMoon} onClick={handleChangeTheme} className={iconClass} />
  ) : (
    <FontAwesomeIcon icon={faSun} onClick={handleChangeTheme} className={iconClass} />
  );
};

export default ThemeSwitcher;
