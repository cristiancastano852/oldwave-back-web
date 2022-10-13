import React, { useContext } from 'react';
import CartContext from 'context/CartContext';

export default function Cart() {
  const context = useContext(CartContext);
  // eslint-disable-next-line no-console
  console.log(context.cart);
  return (
    <div>
      {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
      <h1>Carrito</h1>
    </div>
  );
}
