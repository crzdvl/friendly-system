import history from '../helpers/history';

async function login() {
  window.FB.getLoginStatus((response) => {
    if (response.status === 'connected') {
      history.push('/aboutMe');
    }
    window.FB.login(
      (loginResponse) => {
        if (loginResponse.status === 'connected') {
          history.push('/aboutMe');
        } else {
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

      history.push('/');
    }
  });
}

async function checkCurrentAccessToken() {
  let result = false;

  await window.FB.getLoginStatus((response) => {
    if (response.status === 'connected') {
      result = true;
    }
  });

  return result;
}

export { login, logout, checkCurrentAccessToken };
