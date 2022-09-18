import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { changeIsFavorite } from '../../../redux/productsRedux';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

import ProductStars from '../ProductStars/ProductStars';
import ProductModal from '../ProductModal/ProductModal';

import { useDispatch, useSelector } from 'react-redux';
import {
  toggleToCompare,
  getCounttoCompare,
  getCompare,
} from '../../../redux/productsRedux';

const ProductBox = ({
  name,
  price,
  promo,
  priceOld,
  stars,
  userStars,
  favorite,
  toCompare,
  id,
  image,
}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isfavorite, setIsFavorite] = useState(favorite);
  const toggleIsFavorite = e => {
    e.preventDefault();
    // dispatch(changeIsFavorite(id));
    setIsFavorite(!isfavorite);
  };

  const handleModal = e => {
    e.preventDefault();
    setShowModal(!showModal);
  };
  const numberOfCompares = useSelector(getCounttoCompare);
  const prodId = id;

  const handleCompare = (e, prodId) => {
    e.preventDefault();
    if (numberOfCompares < 4 && toCompare === false) {
      dispatch(toggleToCompare(prodId));
    } else if (numberOfCompares === 4 && toCompare === false) {
      console.log('cant add more than 4 to compare');
    } else if (toCompare === true) {
      dispatch(toggleToCompare(prodId));
    }
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo} style={{ backgroundImage: `url(${image})` }}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small' onClick={handleModal}>
            Quick View
          </Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <ProductStars stars={stars} userStars={userStars} id={id} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            onClick={toggleIsFavorite}
            className={clsx(isfavorite && styles.active)}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button className={clsx(toCompare && styles.activeCompare)} variant='outline'>
            <FontAwesomeIcon
              icon={faExchangeAlt}
              onClick={e => handleCompare(e, prodId)}
            >
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
      {showModal && (
        <ProductModal
          productData={{
            name,
            price,
            promo,
            priceOld,
            stars,
            userStars,
            favorite,
            toCompare,
            id,
          }}
          handleModal={handleModal}
          isfavorite={isfavorite}
          toggleIsFavorite={toggleIsFavorite}
        />
      )}
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
  userStars: PropTypes.number,
  favorite: PropTypes.bool,
  toCompare: PropTypes.bool,
  image: PropTypes.string,
};

export default ProductBox;
