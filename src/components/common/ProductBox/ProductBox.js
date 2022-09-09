import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { toggleToCompare } from '../../../redux/productsRedux';

const ProductBox = ({
  name,
  price,
  promo,
  priceOld,
  stars,
  favorite,
  toCompare,
  id,
}) => {
  const dispatch = useDispatch();

  const handleCompare = e => {
    e.preventDefault();
    dispatch(toggleToCompare(id));
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${id}.jpeg)`,
          backgroundSize: 'cover',
        }}
      >
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
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
          <Button className={clsx(favorite && styles.active)} variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button className={clsx(toCompare && styles.active)} variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt} onClick={handleCompare}>
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
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceOld: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  toCompare: PropTypes.bool,
};

export default ProductBox;
