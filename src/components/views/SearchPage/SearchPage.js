import React from 'react';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import SearchResult from '../../features/SearchResult/SearchResultContainer';
import styles from './SearchPage.module.scss';

const SearchPage = () => (
  <div className={styles.root}>
    <SearchResult />
    {/*  <NewFurniture /> */}
  </div>
);

// ProductPage.propTypes = {};

export default SearchPage;
