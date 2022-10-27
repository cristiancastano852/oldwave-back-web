import React from 'react';
import { BsTrash, BsPlusLg } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import ButtonAndIcon from 'components/atoms/ButtonAndIcon';

export default function Cart() {
  const cartItems = [];

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  const productsInCart = cartItems.map((product) => (
    <div className='flex  items-center'>
      <img
        src={product.thumbnail}
        width='60'
        height='60'
        className='rounded-full '
        alt={product.name}
      />

      <div className='flex flex-col ml-3'>
        <p className='md:text-md font-medium break-all'>{product.name}</p>
        <p className='text-sm font-light text-gray-400'>{product.brand}</p>
      </div>

      <div className='hidden flex justify-center align-center space-x-2 md:block md:ml-auto'>
        <button type='button'>
          <AiOutlineMinus className='h-6 w-6 text-violet pr-1' />
        </button>
        <button type='button'>
          <BsPlusLg className='h-6 w-6 text-violet pr-1' />
        </button>
        <button type='button'>
          <BsTrash className='h-6 w-6 text-violet pr-1' />
        </button>
      </div>

      <div className='flex flex-col text-center space-y-2 ml-auto md:ml-5'>
        <span className='text-base md:text-md font-medium'>
          {formatterPeso.format(product.value)}
        </span>
        <span className='text-sm font-light text-gray-400'>
          Cantidad: {product.quantity}
        </span>
        <div className='flex justify-center align-center space-x-2 md:hidden'>
          <button type='button'>
            <AiOutlineMinus className='h-6 w-6 text-violet pr-1' />
          </button>
          <button type='button'>
            <BsPlusLg className='h-6 w-6 text-violet pr-1' />
          </button>
          <button type='button'>
            <BsTrash className='h-6 w-6 text-violet pr-1' />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='flex flex-col justify-center pt-10 pb-20 px-5 md:px-20'>
      <h1 className='text-lg font-bold md:text-3xl'>Carro de compras</h1>
      {cartItems.length <= 0 ? (
        <h2 className='mt-5 ml-2 md:ml-5' classNameNameName=''>
          No hay artículos en el carro
        </h2>
      ) : (
        <>
          <div className='flex flex-col mt-10 space-y-8'>{productsInCart}</div>
          <div className='flex justify-between mt-10'>
            <ButtonAndIcon
              text='Vaciar carro'
              otherStyles='bg-violet rounded-2xl border border-white py-2 px-8'
              textStyle='text-white'
            />
            <ButtonAndIcon
              text='Realizar pago'
              otherStyles='bg-violet rounded-2xl border border-white py-2 px-8'
              textStyle='text-white'
            />
          </div>
        </>
      )}
    </div>
  );
}
