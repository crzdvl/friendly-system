function initFacebookSdk() {
  return new Promise((resolve) => {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_ID,
        cookie: true,
        xfbml: true,
        version: 'v8.0',
      });
      resolve();
    };

    ((d, s, id) => {
      let js = {};
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
}

export default initFacebookSdk;
