import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import { changeIsFavorite } from '../../../redux/productsRedux';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

import ProductStars from '../ProductStars/ProductStars';
import ProductModal from '../ProductModal/ProductModal';

import { useDispatch, useSelector } from 'react-redux';
import {
  toggleToCompare,
  getCounttoCompare,
  changeIsFavorite,
} from '../../../redux/productsRedux';

const ProductBox = ({
  name,
  price,
  promo,
  priceOld,
  stars,
  favorite,
  toCompare,
  id,
  image,
}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const toggleIsFavorite = e => {
    e.preventDefault();
    dispatch(changeIsFavorite(id));
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
      <Link to={`/product/${name}-${id}`}>
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
      </Link>

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
          <Button
            onClick={toggleIsFavorite}
            className={clsx(favorite && styles.active)}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            className={clsx(toCompare && styles.activeCompare)}
            variant='outline'
            onClick={e => handleCompare(e, prodId)}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
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
            // userStars,
            favorite,
            toCompare,
            id,
          }}
          handleModal={handleModal}
          isfavorite={favorite}
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
  favorite: PropTypes.bool,
  toCompare: PropTypes.bool,
  image: PropTypes.string,
};

export default ProductBox;
