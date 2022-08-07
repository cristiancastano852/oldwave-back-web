import axios from 'axios';
import Item from 'components/atoms/Item';
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

export default function ItemList({ query }) {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    axios
      .get(`https://api.mercadolibre.com/sites/MCO/search?&q=${query}`)
      .then(({ data }) => {
        setItems(data.results);
      });
  }, [query]);

  const componentItems = items.map((item2) => (
    <section
      className='flex flex-col w-48 h-96 bg-cult-white rounded border border-platinium'
      onClick={() => {
        setItem(item2);
        setItemSelected(true); // bool which indicate when a item was clicked
      }}
      aria-hidden='true'
    >
      <img className='w-48 h-48' src={item2.thumbnail} alt={item2.title} />
      <h3 className='text-center text-sm font-medium px-3 pt-1'>
        {item2.title}
      </h3>
      <h4 className='text-center text-xxs font-medium text-violet px-3'>
        {item2.condition}
        {/* Item2.condition shoulbe changed for brand in oldwave api */}
      </h4>
      <div className='flex flex-row justify-between items-center px-5'>
        <h4 className='font-bold text-sm text-violet'>{`$ ${item2.price}`}</h4>
        <div className='flex flex-row items-center'>
          <span>
            <AiFillStar className='h-6 w-6 text-violet pr-1' />
          </span>
          <h4 className='text-sm'>4.6</h4>
        </div>
      </div>
      <div className='flex flex-row justify-between text-xxs px-4'>
        <h4 className='w-1/2'>{item2.address.city_name}</h4>
        <h4>{item2.seller.id}</h4>
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

  const getInfo = () => {
    if (itemSelected) {
      return (
        <Item
          itemToCreate={item}
          onReturn={() => {
            setItemSelected(false);
            setItem([]);
          }}
        />
      );
    }
    return (
      <section className='flex flex-col w-full items-center'>
        <h1> {`${items.length} Resultados`}</h1>
        <section className='flex flex-row flex-wrap w-full items-center justify-center py-3 gap-4 md:gap-6'>
          {componentItems}
        </section>
      </section>
    );
  };

  return <>{getInfo()}</>;
}
