import React from 'react';
import styles from './ProductModal.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

import Button from '../Button/Button';
import ProductStars from '../ProductStars/ProductStars';

const ProductModal = ({ productData, handleModal, isfavorite, toggleIsFavorite }) => {
  const {
    name,
    price,
    promo,
    priceOld,
    stars,
    userStars,
    favorite,
    toCompare,
    id,
  } = productData;
  return (
    <div className={styles.root}>
      <div className={styles.modalBox}>
        <div
          className={styles.photo}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${id}.jpeg)`,
            backgroundSize: 'cover',
          }}
        >
          {promo && <div className={styles.sale}>{promo}</div>}

          <div className={styles.buttons}>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
            <div className={styles.buttonsSmall}>
              <Button
                onClick={toggleIsFavorite}
                className={clsx(isfavorite && styles.active)}
                variant='small'
              >
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button className={clsx(toCompare && styles.active)} variant='small'>
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.content}>
            <h5>{name}</h5>
            <ProductStars stars={stars} userStars={userStars} id={id} />
          </div>
          {priceOld && (
            <div className={styles.priceOld}>
              <Button noHover variant='small'>
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
        <div className={styles.closeButton}>
          <Button onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} size='lg'></FontAwesomeIcon>
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  productData: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  priceOld: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  favorite: PropTypes.bool,
  toCompare: PropTypes.bool,
  handleModal: PropTypes.func,
  isfavorite: PropTypes.func,
  toggleIsFavorite: PropTypes.func,
};

export default ProductModal;
