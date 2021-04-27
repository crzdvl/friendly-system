import React, { useState, useEffect } from 'react';
import shortid from 'shortid';

import styles from './AboutMe.module.css';
import * as accountService from '../../services/account-service';

import Album from '../../components/Album/Album';
import Button from '../../components/Button/Button';
import Subtitle from '../../components/Subtitle/Subtitle';
import Headline from '../../components/Headline/Headline';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';

function AboutMe() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [photos, setPhotos] = useState([]);

  const getPhotos = async (numberOfPhotos) => {
    const albumId = await new Promise((resolve) =>
      window.FB.api('/me?fields=albums.limit(1){name,count,cover_photo{picture}}', ({ albums: { data } }) =>
        resolve(data[0].id),
      ),
    );

    const photosFromAlbum = await new Promise((resolve) =>
      window.FB.api(
        `${albumId}/?fields=photos.limit(${numberOfPhotos}){picture,images,created_time,place}`,
        ({ photos: { data } }) => resolve(data),
      ),
    );

    const photosInfm = photosFromAlbum.map((photo) => ({
      id: photo.id,
      source: photo.images[0].source,
      created_time: photo.created_time,
      key: shortid.generate(),
    }));

    return photosInfm;
  };

  useEffect(async () => {
    window.FB.api('/me', (user) => {
      setId(user.id);
      setName(user.name);
    });

    const photosInfm = await getPhotos(10);

    setPhotos([...photos, ...photosInfm]);
  }, []);

  return (
    <div className={styles.container}>
      <Headline text={name} />
      <Subtitle text={id} />
      {photos.length && <Album photos={photos} />}
      <Button name="Logout" handleClick={accountService.logout} />
      <ThemeSwitcher />
    </div>
  );
}

export default AboutMe;
