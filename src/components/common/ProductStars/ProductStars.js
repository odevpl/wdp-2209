import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleProductStars } from '../../../redux/productsRedux';
import styles from './ProductStars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const ProductStars = ({ stars, id, userStars }) => {
  const [hover, setHover] = useState(0);

  const dispatch = useDispatch();
  const [starsAmount, setStarsAmount] = useState(stars);
  const [userStarsAmount, setUserStarsAmount] = useState(userStars);

  const toggleStarsAmount = (e, starsNumber) => {
    e.preventDefault();
    dispatch(toggleProductStars({ id, starsNumber }));
    setUserStarsAmount(starsNumber);
  };
  console.log('hover', hover);

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          href='#'
          onClick={e => toggleStarsAmount(e, i)}
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(0)}
        >
          {hover && i > hover ? (
            <FontAwesomeIcon
              icon={farStar}
              className={styles.userStars}
            ></FontAwesomeIcon>
          ) : i <= userStarsAmount || i <= hover ? (
            <FontAwesomeIcon
              icon={faStar}
              className={styles.userStars}
            ></FontAwesomeIcon>
          ) : userStarsAmount > 0 && i > userStarsAmount ? (
            <FontAwesomeIcon
              icon={farStar}
              className={styles.userStars}
            ></FontAwesomeIcon>
          ) : userStarsAmount === 0 && i <= starsAmount && hover === 0 ? (
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}></FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

ProductStars.propTypes = {
  stars: PropTypes.number,
  userStars: PropTypes.number,
  id: PropTypes.string,
};

export default ProductStars;
