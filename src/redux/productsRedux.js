/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

//action creators
const createActionName = actionName => `app/products/${actionName}`;

const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');
const TOGGLE_PRODUCT_STARS = createActionName('TOGGLE_PRODUCT_STARS');

export const changeIsFavorite = payload => ({ type: TOGGLE_PRODUCT_FAVORITE, payload });
export const toggleProductStars = payload => ({ type: TOGGLE_PRODUCT_STARS, payload });

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

    default:
      return statePart;
  }
}
