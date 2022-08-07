import React from 'react';

export default function Item({ itemToCreate, onReturn }) {
  return (
    <div className='item-information-container'>
      <img src={itemToCreate.thumbnail} alt={itemToCreate.title} />
      <div className='item-info'>
        <h1>{itemToCreate.title}</h1>
        <span>{`$ ${itemToCreate.price}`}</span>
        <span>{itemToCreate.address.city_name}</span>
        <button type='button' onClick={onReturn}>
          Volver
        </button>
      </div>
    </div>
  );
}
