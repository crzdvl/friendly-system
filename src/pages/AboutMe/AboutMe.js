import React from 'react';

import styles from './AboutMe.module.css';
import * as accountService from '../../services/account-service';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        id: '',
      },
    };
  }

  componentDidMount() {
    window.FB.getLoginStatus((response) => {
      if (response && response.status === 'connected') {
        window.FB.api('/me', (user) => {
          this.setState({
            user: {
              name: user.name,
              id: user.id,
            },
          });
        });
      }
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className={styles.gradientBG}>
        <div className={styles.container}>
          <h1>{user.name}</h1>
          <p>{user.id}</p>
          <button
            className={styles.button}
            type="button"
            onClick={accountService.logout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default AboutMe;
