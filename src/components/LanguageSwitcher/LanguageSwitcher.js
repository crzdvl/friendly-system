/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";

import i18n from '../../i18n/i18n';

import styles from './LanguageSwitcher.module.css'
import enIcon from './img/en.png';
import ruIcon from './img/ru.png'

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en');

  const handleChangeLanguage = () => {
        if(language === 'en') {
            setLanguage('ru');
            i18n.changeLanguage('ru');
        } else {
            setLanguage('en');
            i18n.changeLanguage('en');
        }
    }


  return language === 'en' ? (
    <button className={styles.button} type="button">
        <img src={enIcon} className={styles.img} alt="english icon" onClick={handleChangeLanguage} />
    </button>
  ) : (
    <button className={styles.button} type="button">
        <img src={ruIcon} className={styles.img} alt="russian icon" onClick={handleChangeLanguage} />
    </button>
  );
}

export default LanguageSwitcher;
