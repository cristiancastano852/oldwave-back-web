/* eslint-disable no-unused-vars */
import React from 'react';

export default React.createContext({
  cart: [],

  addProductToCart: (product) => {},
  removeProductFromCart: (productId) => {},
});
