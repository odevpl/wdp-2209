import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../../common/Swipeable/Swipeable';
import getResVersion from '../../utils/getResVersion';

class SearchResult extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    const { products } = this.props;
    const { activePage } = this.state;

    // this is just example - to have some different products in search results:
    const searchResult = products.filter((_, i) => i % 2 == 0);

    const resVersion = getResVersion();

    const numProdOnPage = () => {
      if (resVersion === 'tablet') {
        return 4;
      } else if (resVersion === 'mobile') return 2;
      else if (resVersion === 'desktop') return 8;
    };

    const pagesCount = Math.ceil(searchResult.length / numProdOnPage());

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    const leftAction = () => {
      this.setState({ activePage: activePage + 1 });

      if (activePage >= pagesCount - 1) {
        this.setState({ activePage: activePage + 0 });
      }
    };

    const rightAction = () => {
      this.setState({ activePage: activePage - 1 });

      if (activePage <= 0) {
        this.setState({ activePage: activePage + 0 });
      }
    };

    return (
      <Swipeable leftAction={leftAction} rightAction={rightAction}>
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.panelBar}>
              <div className='row no-gutters align-items-end'>
                <div className={'col-auto ' + styles.heading}>
                  <h3>Search Results</h3>
                </div>
                <div className={'col-auto ' + styles.dots}>
                  <ul>{dots}</ul>
                </div>
              </div>
            </div>
            <div className='row'>
              {searchResult
                .slice(activePage * numProdOnPage(), (activePage + 1) * numProdOnPage())
                .map(item => (
                  <div key={item.id} className='col-lg-3 col-md-4 col-sm-6 col-12'>
                    <ProductBox {...item} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

SearchResult.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

SearchResult.defaultProps = {
  categories: [],
  products: [],
};

export default SearchResult;
