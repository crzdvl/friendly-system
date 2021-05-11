import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Main.module.css';
import * as accountService from '../../services/account-service';

import Button from '../../components/Button/Button';
import Headline from '../../components/Headline/Headline';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';

const Login = () => {
  const [ t ] = useTranslation();
  return (
    <div className={styles.container}>
      <Headline text={t('nameOfTheSite')} />
      <Button name={t('nameOfButtonLogin')} handleClick={accountService.login} />
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};

export default Login;
