import React from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function ItemCard({
  onReturn,
  img,
  name,
  price,
  city,
  stars,
  seller,
}) {
  return (
    <section
      className='flex flex-col w-48 h-96 bg-cult-white rounded border border-platinium'
      onClick={onReturn}
      aria-hidden='true'
    >
      <img className='w-48 h-48' src={img} alt={name} />
      <h3 className='text-center text-sm font-medium px-3 pt-1'>{name}</h3>
      <div className='flex flex-row justify-between items-center px-5'>
        <h4 className='font-bold text-sm text-violet'>{`$ ${price}`}</h4>
        <div className='flex flex-row items-center'>
          <span>
            <AiFillStar className='h-6 w-6 text-violet pr-1' />
          </span>
          <h4 className='text-sm'>{stars}</h4>
        </div>
      </div>
      <div className='flex flex-row justify-between text-xxs px-4'>
        <h4 className='w-1/2'>{city}</h4>
        <h4>{seller}</h4>
      </div>
      <div className='flex w-full justify-center'>
        <button
          className='w-4/5 bg-violet mt-2 py-1 rounded-2xl text-white text-bold text-xxs'
          type='button'
        >
          Agregar al carrito
        </button>
      </div>
    </section>
  );
}
