import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CompareList.module.scss';
import { getCompare } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleToCompare } from '../../../redux/productsRedux';

const CompareList = () => {
  const toCompare = useSelector(getCompare);

  //const dispatch = useDispatch();

  const handleCompare = (e, id) => {
    e.preventDefault();
    console.log('click');
  };

  return (
    <section className={styles.compareBox}>
      <div className={'container'}>
        <div className={'row align-items-center justify-content-center'}>
          {toCompare.map(product => (
            <div key={product.id} className={'col-2 '}>
              <div
                onClick={handleCompare}
                className={styles.photo}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${product.id}.jpeg)`,
                  backgroundSize: 'cover',
                }}
              >
                <Button className={styles.buttonClose}>
                  <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                </Button>
              </div>

              <div className={'col ' + styles.content}>
                <h5>{product.name}</h5>
              </div>
            </div>
          ))}

          <div className='col-2'>
            <button className={'btn btn-primary'}>Compare</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareList;
