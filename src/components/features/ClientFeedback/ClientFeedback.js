import React from 'react';
import styles from './ClientFeedback.module.scss';
import { useSelector } from 'react-redux';
import SingleClientFeedback from '../SingleClientFeedback/SingleClientFeedback';
import Swipeable from '../../common/Swipeable/Swipeable';
import { useState } from 'react';

const ClientFeedback = () => {
  const clientFeedback = useSelector(state => state.clientFeedback);
  const [activePage, setActivePage] = useState(0);
  const pageNumber = clientFeedback.length;
  const handlePageChange = newPage => setActivePage(newPage);

  const dots = [];
  for (let i = 0; i < pageNumber; i++) {
    dots.push(
      <li key={i}>
        {' '}
        <a
          onClick={() => handlePageChange(i)}
          className={i === activePage ? styles.active : undefined}
        >
          page {i}
        </a>
      </li>
    );
  }
  const leftAction = () => {
    handlePageChange(activePage + 1);
    if (activePage >= pageNumber - 1) {
      handlePageChange(activePage);
    }
  };

  const rightAction = () => {
    handlePageChange(activePage - 1);
    if (activePage <= 0) {
      handlePageChange(activePage);
    }
  };

  return (
    <Swipeable rightAction={rightAction} leftAction={leftAction}>
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row align-items-end no-gutters '>
              <div>
                <h3>CLIENT FEEDBACK</h3>
              </div>
              <div className={styles.linedotscontainer}>
                <div className={styles.line}>
                  <div className={styles.orangeLine}></div>
                </div>
                <div>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {clientFeedback.slice(activePage, activePage + 1).map(client => (
              <SingleClientFeedback key={client.id} {...client} />
            ))}
          </div>
        </div>
      </div>
    </Swipeable>
  );
};

export default ClientFeedback;
