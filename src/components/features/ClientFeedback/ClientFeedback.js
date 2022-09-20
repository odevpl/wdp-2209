import React from 'react';
import styles from './ClientFeedback.module.scss';
import { useSelector } from 'react-redux';
import SingleClientFeedback from '../SingleClientFeedback/SingleClientFeedback';

const ClientFeedback = () => {
  const clientFeedback = useSelector(state => state.clientFeedback);

  return (
    <div className='container'>
      <h3>CLIENT FEEDBACK</h3>
      <div className={styles.panelContainer}>
        <div className={styles.panelBar}>
          <div className={styles.orangePanel}></div>
        </div>
        <div className={styles.dot}></div>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
      </div>
      <div className={styles.mark}>{'"'}</div>
      <div>
        {clientFeedback.map(clientfeedback => (
          <SingleClientFeedback key={clientfeedback.id} {...clientfeedback} />
        ))}
      </div>
    </div>
  );
};

export default ClientFeedback;
