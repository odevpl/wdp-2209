import React from 'react';
import styles from './SingleClientFeedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const SingleClientFeedback = ({ id, feedback, photo, name, surname, description }) => {
  return (
    <div key={id} className='text-center'>
      <div>
        <div className={styles.wrap}>
          <p className={styles.marksign}>
            <FontAwesomeIcon icon={faQuoteRight} />
          </p>
        </div>
        <p>{feedback}</p>
        <div
          className={'mt-4 d-flex flex-row justify-content-center align-items-center '}
        >
          <img src={`${process.env.PUBLIC_URL}${photo}`} alt={photo} />
          <div>
            <p>
              {name} {surname}
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClientFeedback;
