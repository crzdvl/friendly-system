import React, { useState, useEffect } from 'react';

import styles from './AboutMe.module.css';
import * as accountService from '../../services/account-service';

function AboutMe() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    window.FB.getLoginStatus((response) => {
      if (response && response.status === 'connected') {
        window.FB.api('/me', (user) => {
          setId(user.id);
          setName(user.name);
        });
      }
    });
  });

  return (
    <div className={styles.gradientBG}>
      <div className={styles.container}>
        <div className={styles.container}>
          <h1>{name}</h1>
          <p>{id}</p>
          <button className={styles.button} type="button" onClick={accountService.logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
