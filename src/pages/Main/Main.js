import React from 'react';

import styles from './Main.module.css';
import * as accountService from '../../services/account-service';

import Button from '../../components/Button/Button';
import Headline from '../../components/Headline/Headline';

const Login = () => (
  <div className={styles.container}>
    <Headline text="authentication facebook app" />
    <Button name="Login" handleClick={accountService.login} />
  </div>
);

export default Login;
