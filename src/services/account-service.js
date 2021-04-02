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

  if (currentAccessToken !== null) {
    const result = await axios.get(
      `https://graph.facebook.com/debug_token?input_token=
    ${currentAccessToken}&access_token=${currentAccessToken}`,
    );

    return result.data.data.is_valid;
  }
  return false;
}

export { login, logout, checkCurrentAccessToken };
