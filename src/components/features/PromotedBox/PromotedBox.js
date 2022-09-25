import React from 'react';
import styles from './PromotedBox.module.scss';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faStar,
  faEye,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';
const PromotedBox = () => {
  //Variables to render template
  const swipeLeft = () => {
    console.log('Swipe Left Works');
  };
  const swipeRight = () => {
    console.log('Swipe Right Works');
  };
  const name = 'Aenean Ru Bristique';
  const stars = 2;
  const priceOld = 250;
  const price = 200;
  const id = 'aenean-ru-bristique-1';
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col-4 ${styles.colHover}`}>
            <div className={styles.headingContent}>
              <h3>HOT DEALS</h3>
              <div className={styles.dots}>
                <ul>
                  <li>
                    <a className={styles.active}></a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={styles.photo}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${id}.jpeg)`,
                backgroundSize: 'cover',
              }}
            >
              <Button className={styles.centerButton} variant='small'>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>

              <div className={styles.timer}>
                <div className={styles.time}>
                  <span>25</span> <br /> DAYS
                </div>
                <div className={styles.time}>
                  <span>10</span> <br /> HRS
                </div>
                <div className={styles.time}>
                  <span>45</span> <br /> MINS
                </div>
                <div className={styles.time}>
                  <span>30</span> <br /> SECS
                </div>
              </div>
            </div>
            <div className={styles.borderCol}>
              <div className={styles.content}>
                <h5>{name}</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= stars ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.actions}>
                <div className={styles.outlines}>
                  <Button className={styles.contentButton} variant='outline'>
                    <FontAwesomeIcon icon={faEye}>View</FontAwesomeIcon>
                  </Button>
                  <Button className={styles.contentButton} variant='outline'>
                    <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                  </Button>
                  <Button className={styles.contentButton} variant='outline'>
                    <FontAwesomeIcon icon={faExchangeAlt}>
                      Add to compare
                    </FontAwesomeIcon>
                  </Button>
                </div>
                {priceOld && (
                  <div className={styles.priceold}>
                    <Button noHover variant='light'>
                      $ {priceOld}
                    </Button>
                  </div>
                )}
                <div>
                  <Button noHover variant='small'>
                    $ {price}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 col-sm-12'>
            <Swipeable leftAction={swipeLeft} rightAction={swipeRight}>
              <div
                className={styles.photoRight}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${id}.jpeg)`,
                  backgroundSize: 'cover',
                }}
              >
                <div className={styles.contentRight}>
                  <h2>
                    INDOOR <span>FURNITURE</span>
                  </h2>
                  <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                  <Button className={styles.buttonContentRight}>SHOP NOW</Button>
                </div>
                <div className='row'>
                  <Button className={styles.buttonPromo}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </Button>
                  <Button className={styles.buttonPromo}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Button>
                </div>
              </div>
            </Swipeable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotedBox;
