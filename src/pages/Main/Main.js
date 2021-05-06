import React from 'react';

import styles from './Main.module.css';
import * as accountService from '../../services/account-service';

import Button from '../../components/Button/Button';
import Headline from '../../components/Headline/Headline';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';

const Login = () => (
  <div className={styles.container}>
    <Headline text="authentication facebook app" />
    <Button name="Login" handleClick={accountService.login} />
    <ThemeSwitcher />
  </div>
);

export default Login;
