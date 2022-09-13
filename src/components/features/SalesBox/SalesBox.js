import React from 'react';
import styles from './SalesBox.module.scss';
const SalesBox = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.contentBox}`}>
          <div className='col-6'>
            <div
              className={styles.photoLeft}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/aenean-ru-bristique-3.jpeg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className={styles.blackOut}>
                <h3>
                  GUEST ROOM <br /> <span>SOFA</span>
                </h3>
                <p>-20%</p>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className={`row ${styles.paddingBottom}`}>
              <div className='col-12'>
                <div
                  className={styles.photoRight}
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/aenean-ru-bristique-5.jpeg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className={styles.contentTextUp}>
                    <h3>
                      <span>OFFICE</span> CHAIR
                    </h3>
                    <h4>COLLECTION</h4>
                    <p>$200.00</p>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div
                  className={styles.photoRight}
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/aenean-ru-bristique-20.jpeg)`,
                    backgroundSize: 'cover',
                  }}
                >
                  <div className={styles.contentTextDown}>
                    <h3>
                      <span>SPECIAL</span> COLLECTION
                    </h3>
                    <p>SAVE UP 45% OF FURNITURE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesBox;
