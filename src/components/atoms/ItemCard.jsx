import React from 'react';

export default function Item({ itemToCreate, onReturn }) {
  return (
    <div className='item-information-container'>
      <img src={itemToCreate.thumbnail} alt={itemToCreate.name} />
      <div className='item-info'>
        <h1>{itemToCreate.mate}</h1>
        <span>{`$ ${itemToCreate.value}`}</span>
        <span>{itemToCreate.productSeller.addressCity.name}</span>
        <button type='button' onClick={onReturn}>
          Volver
        </button>
      </div>
    </div>
  );
}
