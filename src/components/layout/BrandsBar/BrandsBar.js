import React from 'react';
import { useSelector } from 'react-redux';
import BrandBox from '../../common/BrandBox/BrandBox';
import Button from '../../common/Button/Button';
import { getAllBrands } from '../../../redux/brandsRedux';
import styles from './BrandsBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
  Swiper,
  SwiperSlide,
} from '../../../../node_modules/swiper/react/swiper-react.js';
import '../../../../node_modules/swiper/modules/grid/grid.scss';
import '../../../../node_modules/swiper/swiper.scss';
import '../../../../node_modules/swiper/modules/pagination/pagination.scss';

const BrandsBar = () => {
  const brands = useSelector(getAllBrands);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.brands}>
          <Button className={styles.brandsBtn} noHover variant='small'>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            className='mySwiper'
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              390: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 10,
              },
            }}
          >
            {brands.map(brand => (
              <SwiperSlide className='col-5 col-md-3 col-xl-2' key={brand.id}>
                <BrandBox key={brand.id} {...brand} />
              </SwiperSlide>
            ))}
          </Swiper>
          <Button className={styles.brandsBtn} noHover variant='small'>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BrandsBar;
