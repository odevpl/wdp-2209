/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getCompare = ({ products }) =>
  products.filter(item => item.toCompare === true);

export const getCounttoCompare = ({ products }) =>
  products.filter(product => product.toCompare === true).length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_TO_COMPARE = createActionName('TOGGLE_TO_COMPARE');

/* action creators */
// export const toggleToCompare = payload => ({ payload, type: TOGGLE_TO_COMPARE });

export const toggleToCompare = payload => ({ payload, type: TOGGLE_TO_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_TO_COMPARE: {
      // if (statePart.filter(product => product.toCompare === true).length <= 4) {
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, toCompare: !product.toCompare }
          : product
      );
      //}
    }

    default:
      return statePart;
  }
}
