/* eslint-disable no-console */
/* eslint-disable no-plusplus */

const addProductToCart = (product, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === product.id
  );

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 });
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity++;
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId, state) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === productId
  );

  const updatedItem = {
    ...updatedCart[updatedItemIndex],
  };
  updatedItem.quantity--;
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1);
  } else {
    updatedCart[updatedItemIndex] = updatedItem;
  }

  return { ...state, cart: updatedCart };
};

export const cartReducer = (state, action) => {
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

export const actionTypes = {
  addProductCart: 'ADD_PRODUCT',
  removeProductCart: 'REMOVE_PRODUCT',
};
