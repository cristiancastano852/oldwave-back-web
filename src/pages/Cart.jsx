import React from 'react';
import { BsTrash, BsPlusLg } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import ButtonAndIcon from 'components/atoms/ButtonAndIcon';
import useCartState from 'hooks/useCartState';
import Loading from 'components/atoms/Loading';
import { useUserState } from 'hooks/useUserState';

export default function Cart() {
  const {
    products,
    totalProducts,
    totalPrice,
    addProduct,
    removeProduct,
    emptyCart,
    loadingCart,
    processOrder,
  } = useCartState();

  const { loading } = useUserState();

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  const productsInCart = products.map((product) => (
    <div className='flex items-center' key={product.id}>
      <img
        src={product.cartProduct.thumbnail}
        className='rounded-full w-16 h-16'
        alt={product.cartProduct.name}
      />

      <div className='flex flex-col ml-3'>
        <p className='md:text-md font-medium break-all'>
          {product.cartProduct.name}
        </p>
        <p className='text-sm font-light text-gray-400'>
          {product.cartProduct.brand ? product.cartProduct.name : 'Lujo'}
        </p>
      </div>

      <div className='hidden flex justify-center align-center space-x-2 md:block md:ml-auto'>
        <button
          type='button'
          onClick={() => {
            removeProduct({ productId: product.id, isForAll: true });
          }}
        >
          <AiOutlineMinus className='h-6 w-6 text-violet pr-1' />
        </button>
        <button
          type='button'
          onClick={() => {
            addProduct(product.id);
          }}
        >
          <BsPlusLg className='h-6 w-6 text-violet pr-1' />
        </button>
        <button
          type='button'
          onClick={() =>
            removeProduct({ productId: product.id, isForAll: true })
          }
        >
          <BsTrash className='h-6 w-6 text-violet pr-1' />
        </button>
      </div>

      <div className='flex flex-col text-center space-y-2 ml-auto md:ml-5'>
        <span className='text-base md:text-md font-medium'>
          {formatterPeso.format(product.cartProduct.value)}
        </span>
        <span className='text-sm font-light text-gray-400'>
          Cantidad: {product.units}
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

  if (loadingCart || loading) {
    return <Loading />;
  }

  return (
    <div className='flex flex-col justify-center pt-10 pb-20 px-5 md:px-20'>
      <h1 className='text-lg font-bold md:text-3xl'>Carro de compras</h1>
      {products.length <= 0 ? (
        <h2 className='mt-5 ml-2 md:ml-5'>No hay artículos en el carro</h2>
      ) : (
        <>
          <div className='flex flex-col mt-5'>
            <h2 className='mt-5 ml-2 md:text-lg md:ml-5'>
              Artículos en el carro: {totalProducts}
            </h2>
          </div>
          <div className='flex flex-col mt-10 space-y-8'>{productsInCart}</div>
          <h3 className='mt-10 ml-auto text-lg text-semibold'>
            Total: {formatterPeso.format(totalPrice)}
          </h3>
          <div className='flex flex-col justify-center items-center space-y-5 mt-3 md:space-y-0 md:justify-between md:flex-row-reverse'>
            <ButtonAndIcon
              text='Realizar pago'
              otherStyles='bg-violet rounded-2xl border border-white py-2 px-8'
              textStyle='text-white'
              onClick={() => processOrder()}
            />
            <ButtonAndIcon
              text='Vaciar carro'
              otherStyles='bg-violet rounded-2xl border border-white py-2 px-8'
              textStyle='text-white'
              onClick={() => emptyCart()}
            />
          </div>
        </>
      )}
    </div>
  );
}
