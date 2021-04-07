import axios from 'axios';
import history from '../helpers/history';

async function login() {
  const { authResponse } = await new Promise(window.FB.login);

  if (!authResponse) {
    localStorage.removeItem('accessToken');
    history.push('/');
  } else {
    localStorage.setItem('accessToken', authResponse.accessToken);
    history.push('/aboutMe');
  }
}

function logout() {
  window.FB.getLoginStatus(async (response) => {
    if (response && response.status === 'connected') {
      await window.FB.logout();
      localStorage.removeItem('accessToken');

      history.push('/');
    }
  });
}

async function checkCurrentAccessToken() {
  const currentAccessToken = localStorage.getItem('accessToken');
  let result = false;

  if (currentAccessToken !== null) {
    await axios
      .get('https://graph.facebook.com/debug_token', {
        params: {
          input_token: currentAccessToken,
          access_token: currentAccessToken,
        },
      })
      .then((response) => {
        result = response.data.data.is_valid;
      })
      .catch(() => {
        result = false;
      });

    return result;
  }
  return false;
}

export { login, logout, checkCurrentAccessToken };
