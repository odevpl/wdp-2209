import React from 'react';
import styles from './SingleClientFeedback.module.scss';

// eslint-disable-next-line react/prop-types
const SingleClientFeedback = ({ id, feedback, photo, name, surname, description }) => {
  return (
    <div key={id} className='text-center'>
      <div>
        <p className={styles.marksign}>{`"`}</p>
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
