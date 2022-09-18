import React from 'react';
import styles from './Homepage.module.scss';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

import Gallery from '../../features/Gallery/Gallery';

import ClientFeedback from '../../features/ClientFeedback/ClientFeedback';
import BrandsBar from '../../layout/BrandsBar/BrandsBar';
import PromotedBox from '../../features/PromotedBox/PromotedBox';
import SalesBox from '../../features/SalesBox/SalesBox';

const Homepage = () => (
  <div className={styles.root}>
    <PromotedBox />
    <FeatureBoxes />
    <SalesBox />
    <NewFurniture />
    <Gallery />
    <ClientFeedback />
    <BrandsBar />
   </div>
);

export default Homepage;
