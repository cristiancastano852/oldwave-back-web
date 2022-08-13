import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function ItemList({ query }) {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    axios
      .get(`https://asac-back-dev.azurewebsites.net/products?search=${query}`)
      .then(({ data }) => {
        setItems(data.products);
      });
  }, [query]);

  const componentItems = items.map((item2) => (
    <section
      className='flex flex-col w-48 h-96 bg-cult-white rounded border border-platinium'
      onClick={() => {
        setItem(item2);
        setItemSelected(true); // bool which indicate when a item was clicked
      }}
      key={item2.id}
      aria-hidden='true'
    >
      <img className='w-48 h-48' src={item2.thumbnail} alt={item2.name} />
      <h3 className='text-center text-sm font-medium px-3 pt-1'>
        {item2.name}
      </h3>
      <div className='flex flex-row justify-between items-center px-5'>
        <h4 className='font-bold text-sm text-violet'>{`$ ${item2.value}`}</h4>
        <div className='flex flex-row items-center'>
          <span>
            <AiFillStar className='h-6 w-6 text-violet pr-1' />
          </span>
          <h4 className='text-sm'>{item2.rating}</h4>
        </div>
      </div>
      <div className='flex flex-row justify-between text-xxs px-4'>
        <h4 className='w-1/2'>{item2.productSeller.addressCity.name}</h4>
        <h4>{item2.seller}</h4>
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
  ));

  useEffect(() => {
    if (itemSelected) {
      navigate(`/item/${item.id}`);
    }
  }, [itemSelected]);

  const getInfo = () => {
    if (!itemSelected) {
      return (
        <section className='flex flex-col w-full items-center my-4'>
          <h1 className='text-lg mb-5'> {`${items.length} Resultados`}</h1>
          <section className='flex flex-row flex-wrap w-full items-center justify-center gap-5 md:gap-7'>
            {componentItems}
          </section>
        </section>
      );
    }
    return null;
  };

  return <>{getInfo()}</>;
}
