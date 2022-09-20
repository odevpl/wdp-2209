import React from 'react';
import PropTypes from 'prop-types';
import { Link, Routes } from 'react-router-dom';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <input id='dropdown' type='checkbox'></input>
        <div className={styles.searchLayout}>
          <ProductSearch />
          <label className={styles.dropdownButton} htmlFor='dropdown'>
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/furniture'}>Furniture</Link>
            </li>
            <li>
              <Link to={'/chair'}>Chair</Link>
            </li>
            <li>
              <Link to={'/table'}>Table</Link>
            </li>
            <li>
              <Link to={'/sofa'}>Sofa</Link>
            </li>
            <li>
              <Link to={'/bedroom'}>Bedroom</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
