/* eslint-disable no-console */
import React, { useReducer } from 'react';
import CartContext from 'context/CartContext';
import { cartReducer } from 'context/reducers';

function GlobalState({ children }) {
  // const [cart, setCart] = useState([]);

  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });

  const addProductToCart = (product) => {
    console.log('addProductToCart', product);
    dispatch({ type: 'ADD_PRODUCT', product });
  };

  const removeProductFromCart = (productId) => {
    console.log('removeProductFromCart', productId);
    dispatch({ type: 'REMOVE_PRODUCT', productId });
  };

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default GlobalState;
