import React, { Component } from 'react';
import styles from './App.css';

import Main from '../../pages/Main/Main';
import AboutMe from '../../pages/AboutMe/AboutMe';

import RouterForLoggedInUser from '../../helpers/routers/RouterForLoggedInUser';
import RouterForNotLoggedInUser from '../../helpers/routers/RouterForNotLoggedInUser';

import { checkCurrentAccessToken } from '../../services/account-service';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isLoggedIn: false,
    };
  }

  async componentDidMount() {
    const result = await checkCurrentAccessToken();
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken !== null && result) {
      this.setState(() => ({
        isLoggedIn: true,
        isLoading: false,
      }));
    } else {
      localStorage.removeItem('accessToken');
      this.setState(() => ({
        isLoading: false,
      }));
    }
  }

  // FIX: RouterForLoggedInUser work OK, but with RouterForNotLoggedInUser not
  render() {
    const { isLoggedIn, isLoading } = this.state;
    return (
      <div className={styles.page}>
        <RouterForNotLoggedInUser
          path="/"
          component={Main}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
        />
        <RouterForLoggedInUser
          path="/aboutMe"
          component={AboutMe}
          isLoggedIn={isLoggedIn}
          isLoading={isLoading}
        />
      </div>
    );
  }
}

export default App;
