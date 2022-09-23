import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

const ProductPage = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4 text-center'>
          <div className={styles.photocontainer}>
            <div className={styles.bigphoto}>
              <div className={styles.greyspace}>
                <div className={styles.arrowboxspace}>
                  <div>
                    <span>&#8596;</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.smallphotos}>
              <div className={styles.smallbox}>
                <div className={styles.arrowbox}>
                  <span>&#60;</span>
                </div>
              </div>
              <div className={styles.smallbox}></div>
              <div className={styles.smallbox}></div>
              <div className={styles.smallbox}>
                <div className={styles.secondarrowbox}>
                  <span>&#62;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-8 text-center'>
          <div className='d-flex flex-column p-2'>
            <div className='d-flex flex-row justify-content-between'>
              <div className={styles.header}>Sunbaby Magic Bear Chair</div>
              <div className='d-flex flex-row justify-content-center'>
                <div className={styles.arrowbox}>
                  <span>&#60;</span>
                </div>
                <div className={styles.secondarrowbox}>
                  <span>&#62;</span>
                </div>
              </div>
            </div>
            <div className='d-flex flex-row justify-content-start'>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
              <span>(0 reviews) | Add your review</span>
            </div>
            <div className={styles.bottomline}></div>
            <div className='d-flex flex-row justify-content-start'>
              <p className={styles.crossed}>$350</p>
              <div className={styles.blackbox}>$250</div>
            </div>
            <div className={styles.bottomline}></div>
            <div className='d-flex flex-row justify-content-start align-items-center'>
              <div className={styles.addtocart}>
                <div className='d-flex flex-row justify-content-center align-items-center mx-auto'>
                  <span>
                    <span className={styles.white}>
                      <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                    </span>
                  </span>
                  <div className={styles.white}>ADD TO CART</div>
                </div>
              </div>
              <div className={styles.box}>
                <span>&#9825;</span>
              </div>
              <div className={styles.box}>
                <span> &#8644;</span>
              </div>
              <div className={styles.box}>
                <span>&#128386;</span>
              </div>
            </div>
            <div className='d-flex flex-row justify-content-start align-items-center'>
              <p>Quantity:</p>
              <div className={styles.smallerbox}>
                <p>2</p>
              </div>
              <div className={styles.smallerboxtwo}>
                <span>-</span>
              </div>
              <div className={styles.smallerboxtwoactive}>
                <span>+</span>
              </div>
            </div>
            <div className={styles.bottomline}></div>
            <div className='d-flex flex-column justify-content-start align-items-start'>
              <h6>Quick review</h6>
              <p className={styles.left}>
                Nam tristique porta ligua vel vierrea sem eliefend nec. Nulla sedn
                pursus augue eu euis mod tellus. Nam mattis eros tis sagittis .
                Vestibulum suscipit cursus biben{' '}
              </p>
            </div>
            <div className={styles.bottomline}></div>
            <div className='d-flex flex-row justify-content-start align-items-start'>
              <span className={styles.highlight}>Availability:</span>
              <span> in stock</span>
            </div>
            <div className='d-flex flex-row justify-content-start align-items-start'>
              <span className={styles.highlight}>Category:</span>
              <span> furniture</span>
            </div>
            <div className={styles.bottomline}></div>
            <div className='d-flex flex-row justify-content-start align-items-start'>
              <div
                className={styles.socialbutton + ' ' + styles.blue + ' ' + styles.white}
              >
                <span>
                  <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>Share
                </span>
              </div>
              <div className={styles.whitebox}>
                <span>
                  <span className={styles.red}>
                    <FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon>
                  </span>
                  Google+
                </span>
              </div>
              <div className={styles.whitebox}>
                <span>
                  <span className={styles.blue}>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </span>
                  Twitter
                </span>
              </div>
              <div className={styles.whitebox}>
                <span>
                  <span className={styles.red}>
                    <FontAwesomeIcon icon={faPinterestP}></FontAwesomeIcon>
                  </span>
                  Pinterest
                </span>
              </div>
              <div className={styles.whitebox}>
                <span>
                  <span className={styles.blue}>
                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                  </span>
                  LinkedIn
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomline}></div>
      <br></br>
    </div>
  );
};

// ProductPage.propTypes = {};

export default ProductPage;
