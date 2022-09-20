import React from 'react';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComments } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';

const Blog = () => {
  return (
    <div className='container'>
      <h3>BLOG</h3>
      <div className={styles.panelContainer}>
        <div className={styles.panelBar}>
          <div className={styles.orangePanel}></div>
        </div>
        <div className={styles.dot}></div>
        <div className={styles.dots}></div>
        <div className={styles.dots}></div>
      </div>
      <div className={styles.flexcontainer}>
        <div className={styles.infobox}>
          <div className={styles.greyspace}>
            <div className={styles.dataspace}>
              <div className={styles.textcontainer}>
                <FontAwesomeIcon icon={faCalendar} />
                <p>15 JAN 2016</p>
              </div>
              <div className={styles.textcontainer}>
                <FontAwesomeIcon icon={faComments} />
                <p>4 comments</p>
              </div>
            </div>
          </div>
          <div className={styles.lowertextbox}>
            <p className={styles.heading && styles.textactive}>
              Products that fight static{' '}
            </p>
            <p className={styles.text}>
              Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget luctu nsi.
              Nullam euismod leo vehicula, rutrum magna in , ornare enim vehicula ,
              rutrum magna in, ornare enim.
            </p>
          </div>
          <div className={styles.buttoncontainer}>
            <button className={styles.active}>Read More</button>
          </div>
        </div>

        <div className={styles.infobox}>
          <div className={styles.greyspace}>
            <div className={styles.dataspace}>
              <div className={styles.textcontainer}>
                <FontAwesomeIcon icon={faCalendar} />
                <p>15 JAN 2016</p>
              </div>
              <div className={styles.textcontainer}>
                <FontAwesomeIcon icon={faComments} />
                <p>4 comments</p>
              </div>
            </div>
          </div>
          <div className={styles.lowertextbox}>
            <p className={styles.heading}>Products that fight static </p>
            <p className={styles.text}>
              Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget luctu nsi.
              Nullam euismod leo vehicula, rutrum magna in , ornare enim vehicula ,
              rutrum magna in, ornare enim.
            </p>
          </div>
          <div className={styles.buttoncontainer}>
            <button>Read More</button>
          </div>
        </div>

        <div className={styles.infobox}>
          <div className={styles.greyspace}>
            <div className={styles.dataspace}>
              <div className={styles.textcontainer}>
                <FontAwesomeIcon icon={faCalendar} />
                <p>15 JAN 2016</p>
              </div>
              <div className={styles.textcontainer}>
                <FontAwesomeIcon icon={faComments} />
                <p>4 comments</p>
              </div>
            </div>
          </div>
          <div className={styles.lowertextbox}>
            <p className={styles.heading}>Products that fight static </p>
            <p className={styles.text}>
              Aliquam dictum pellentesque nibh sit amet dapibus. Vivamus eget luctu nsi.
              Nullam euismod leo vehicula, rutrum magna in , ornare enim vehicula ,
              rutrum magna in, ornare enim.
            </p>
          </div>
          <div className={styles.buttoncontainer}>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
