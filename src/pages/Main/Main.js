import React from 'react';
import styles from './Main.module.css';
import * as accountService from '../../services/account-service';

const Login = () => (
  <div className={styles.gradientBG}>
    <div className={styles.container}>
      <h1>authentication facebook app</h1>
      <button
        className={styles.button}
        type="button"
        onClick={accountService.login}
      >
        Login
      </button>
    </div>
  </div>
);

export default Login;
