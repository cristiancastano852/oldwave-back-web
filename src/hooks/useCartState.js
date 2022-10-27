/* eslint-disable no-console */
import { useReducer } from 'react';

export default function useCartState() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { products, totalProducts, totalPrice } = state;

  const addProduct = ({ product }) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const removeProduct = ({ productId }) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: productId });
  };

  return {
    products,
    totalProducts,
    totalPrice,
    addProduct,
    removeProduct,
  };
}

const initialState = {
  products: [],
  totalProducts: 0,
  totalPrice: 0,
};

const addProductToCart = () => {};
const removeProductFromCart = () => {};

const cartReducer = (state, action) => {
  console.log('cartReducer', state, action);
  switch (action.type) {
    case 'ADD_PRODUCT':
      console.log('addProductToCart', action.product);
      return addProductToCart(action.product, state);

    case 'REMOVE_PRODUCT':
      console.log('removeProduct', action.product);
      return removeProductFromCart(action.productId, state);

    default:
      console.log('def', action.product);
      return state;
  }
};
