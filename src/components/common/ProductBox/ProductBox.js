import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { changeIsFavorite } from '../../../redux/productsRedux';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
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
  // const dispatch = useDispatch();
  const [isfavorite, setIsFavorite] = useState(favorite);
  const toggleIsFavorite = e => {
    e.preventDefault();
    // dispatch(changeIsFavorite(id));
    setIsFavorite(!isfavorite);
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
          <Button
            onClick={toggleIsFavorite}
            className={clsx(isfavorite && styles.active)}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button className={clsx(toCompare && styles.active)} variant='outline'>
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
