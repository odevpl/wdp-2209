import React from 'react';
import styles from './SingleClientFeedback.module.scss';

// eslint-disable-next-line react/prop-types
const SingleClientFeedback = ({ feedback, name, surname, photo, description }) => {
  return (
    <>
      <h2>{feedback}</h2>
      <div className={styles.photonamedata}>
        <div className={styles.photo}>
          <img
            height='70vh'
            src={`${process.env.PUBLIC_URL}/images/clientfeedback/coverforphoto.jpg`}
          />
        </div>
        <div className={styles.data}>
          <p>
            {name} {surname}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleClientFeedback;
