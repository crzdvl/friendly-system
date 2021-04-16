import React from 'react';
import propTypes from 'prop-types';

import styles from './AlbumPopup.module.css';

const AlbumPopup = ({ handleClickPopup, photoState }) => (
  <div className={styles.container} role="button" tabIndex="0" onClick={() => handleClickPopup(null)}>
    <div className={styles.content}>
      <div className={styles.photoInfm}>
        <div className={styles.photoInfmContanier}>
          <p className={styles.properety}>id:</p>
          <p className={styles.properetyValue}>{photoState.id}</p>
        </div>
        <div className={styles.photoInfmContanier}>
          <p className={styles.properety}>created at:</p>
          <p className={styles.properetyValue}>{photoState.created_time}</p>
        </div>
        <div className={styles.photoInfmContanier}>
          <p className={styles.properety}>source:</p>
          <p className={styles.properetyValue}>{photoState.source}</p>
        </div>
      </div>
      <div className={styles.containerImg}>
        <img alt="img" src={photoState.source} className={styles.img} />
      </div>
    </div>
  </div>
);

AlbumPopup.propTypes = {
  handleClickPopup: propTypes.func.isRequired,
  photoState: propTypes.shape({
    id: propTypes.string,
    key: propTypes.string,
    source: propTypes.string,
    created_time: propTypes.string,
  }).isRequired,
};

export default AlbumPopup;
