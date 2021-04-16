import history from '../helpers/history';

async function login() {
  window.FB.getLoginStatus((response) => {
    if (response.status === 'connected') {
      localStorage.setItem('accessToken', response.authResponse.accessToken);

      history.push('/aboutMe');
    }
    window.FB.login(
      (loginResponse) => {
        if (loginResponse.status === 'connected') {
          localStorage.setItem('accessToken', loginResponse.authResponse.accessToken);

          history.push('/aboutMe');
        } else {
          localStorage.removeItem('accessToken');

          history.push('/');
        }
      },
      { scope: 'user_photos, catalog_management' },
    );
  });
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
  let result = false;

  await window.FB.getLoginStatus((response) => {
    if (response.status === 'connected') {
      localStorage.setItem('accessToken', response.authResponse.accessToken);

      result = true;
    } else localStorage.removeItem('accessToken');
  });

  return result;
}

export { login, logout, checkCurrentAccessToken };
