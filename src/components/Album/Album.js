import React, { useState } from 'react';
import propTypes from 'prop-types';

import styles from './Album.module.css';
import AlbumPopup from '../AlbumPopup/AlbumPopup';

const Album = ({ photos }) => {
  const [photoState, setPhotoState] = useState({});
  const [popupState, setPopupState] = useState(false);

  const handleClickPopup = (photo) => {
    if (photo != null) setPhotoState(photo);

    setPopupState((state) => !state);
  };

  return (
    <div className={styles.container}>
      {popupState && <AlbumPopup handleClickPopup={handleClickPopup} photoState={photoState} />}
      {photos.map((photo) => (
        <div
          className={styles.containerImg}
          key={photo.key}
          role="button"
          tabIndex="0"
          onClick={() => handleClickPopup(photo)}
        >
          <img key={photo.key} alt="img" src={photo.source} className={styles.img} />
        </div>
      ))}
    </div>
  );
};

Album.propTypes = {
  photos: propTypes.PropTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      key: propTypes.string,
      source: propTypes.string,
      created_time: propTypes.string,
    }),
  ).isRequired,
};

export default Album;
