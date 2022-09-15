import { isValidElement } from 'react';

/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getCompare = ({ products }) =>
  products.filter(item => item.toCompare === true);

export const getCounttoCompare = ({ products }) =>
  products.filter(product => product.toCompare === true).length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

//action creators
const reducerName = 'cart';
const createActionName = actionName => `app/products/${actionName}`;
// export const toggleToCompare = payload => ({ payload, type: TOGGLE_TO_COMPARE });

/* action types */
const TOGGLE_TO_COMPARE = createActionName('TOGGLE_TO_COMPARE');
const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');
const TOGGLE_PRODUCT_STARS = createActionName('TOGGLE_PRODUCT_STARS');

export const changeIsFavorite = payload => ({ type: TOGGLE_PRODUCT_FAVORITE, payload });
export const toggleProductStars = payload => ({ type: TOGGLE_PRODUCT_STARS, payload });

export const toggleToCompare = payload => ({ payload, type: TOGGLE_TO_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    case TOGGLE_PRODUCT_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userStars: action.payload.starsNumber }
          : product
      );

    case TOGGLE_TO_COMPARE: {
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, toCompare: !product.toCompare }
          : product
      );
    }

    default:
      return statePart;
  }
}
