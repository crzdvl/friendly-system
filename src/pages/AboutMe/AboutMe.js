import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import getPhotos from '../../store/users/actions'

import AboutMeView from './AboutMeView'

function AboutMe() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const photos = useSelector(state => state.users.photos)

  useEffect(async () => {
    window.FB.api('/me', (user) => {
      setId(user.id);
      setName(user.name);
    });

    dispatch(getPhotos());
  }, []);

  return <AboutMeView 
    headlineText={name}
    subtitleText={id}
    photos={photos}
  />;
}

export default AboutMe;
