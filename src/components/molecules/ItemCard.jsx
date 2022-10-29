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
  brand = 'oldwave',
  onAddCart,
}) {
  // Formato del precio del producto
  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  return (
    <section className='relative flex flex-col w-48 h-96 flex-shrink-0 bg-cult-white rounded-lg border border-platinium'>
      <section className='flex flex-col' onClick={onReturn} aria-hidden='true'>
        <img className=' object-contain w-48 h-48' src={img} alt={name} />
        <div
          className='flex flex-col items-center justify-center w-full h-1/5'
          onClick={onReturn}
          aria-hidden='true'
        >
          <h3 className='text-center text-sm font-medium px-3 pt-4 break-words'>
            {name.length > 60 ? `${name.substring(0, 60)}...` : name}
          </h3>
          {/* TO-DO brand field is by deafult, change to db text */}
          <h4 className='text-center text-violet text-xs font-medium px-3 pt-3'>
            {brand}
          </h4>
        </div>
        <section
          className='flex w-full flex-col absolute bottom-14'
          onClick={onReturn}
          aria-hidden='true'
        >
          <div className='flex flex-row justify-between items-center px-5'>
            <h4 className='font-bold text-sm text-violet'>
              {formatterPeso.format(price)}
            </h4>
            <div className='flex flex-row items-center'>
              <span>
                <AiFillStar className='h-6 w-6 text-violet pr-1' />
              </span>
              <h4 className='text-sm'>{stars}</h4>
            </div>
          </div>
          <section className='flex flex-row justify-between text-xxs px-4 gap-2'>
            <div className='w-1/2'>
              <p className='break-words'>{city}</p>
            </div>
            <div className='w-1/2'>
              <p className='text-right break-words'>{seller}</p>
            </div>
          </section>
        </section>
      </section>
      <div className='flex absolute bottom-3 w-full justify-center items-center mt-2'>
        <button
          onClick={onAddCart}
          className='w-4/5 bg-violet pb-1 rounded-2xl'
          type='button'
        >
          <span className='text-white text-bold text-xxs'>
            Agregar al carrito
          </span>
        </button>
      </div>
    </section>
  );
}
