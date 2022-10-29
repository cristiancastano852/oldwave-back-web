import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCard from 'components/molecules/ItemCard';
import { nanoid } from 'nanoid';

export default function ItemList({ query }) {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const [itemSelected, setItemSelected] = useState(false);

  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    setBrands([{ name: 'nike' }, { name: 'adidas' }, { name: 'puma' }]);
    setTypes([{ name: 'tenis' }, { name: 'botas' }, { name: 'formales' }]);
    setStatus([{ name: 'usado' }, { name: 'nuevo' }, { name: 'reparado' }]);

    const fetchItems = async () => {
      await axios
        .get(
          `https://asac-back-prod.azurewebsites.net/products?search=${query}`
        )
        .then(({ data }) => {
          setItems(data.products);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        });
    };
    fetchItems();
  }, [query]);

  useEffect(() => {
    if (itemSelected) {
      navigate(
        `/item/${item.id}-${item.name.replaceAll(' ', '-').toLowerCase()}`
      );
    }
  }, [itemSelected]);

  const componentItems = items.map((item2) => {
    const onReturn = () => {
      setItem(item2);
      setItemSelected(true);
    };

    return (
      <ItemCard
        onReturn={onReturn}
        key={item2.id}
        img={item2.thumbnail}
        name={item2.name}
        price={item2.value}
        city={item2.productSeller.addressCity.name}
        stars={item2.rating}
        seller={item2.seller}
        brand={item2.brand}
        // onAddCart={() => context.addProductToCart(item2)}
      />
    );
  });

  const productsBrands = brands.map((brand) => (
    <div key={nanoid()} className='flex flex-row items-center'>
      <input
        type='checkbox'
        id={brand.name}
        name={brand.name}
        value={brand.name}
      />
      <label className='ml-3 text-light-grey text-sm' htmlFor={brand.name}>
        {brand.name}
      </label>
    </div>
  ));

  const productsTypes = types.map((type) => (
    <div key={nanoid()} className='flex flex-row items-center'>
      <input
        type='checkbox'
        id={type.name}
        name={type.name}
        value={type.name}
      />
      <label className='ml-3 text-light-grey text-sm' htmlFor={type.name}>
        {type.name}
      </label>
    </div>
  ));

  const productStatus = status.map((status1) => (
    <div key={nanoid()} className='flex flex-row items-center'>
      <input
        type='checkbox'
        id={status1.name}
        name={status1.name}
        value={status1.name}
      />
      <label className='ml-3 text-light-grey text-sm' htmlFor={status1.name}>
        {status1.name}
      </label>
    </div>
  ));

  const getInfo = () => {
    if (!itemSelected) {
      return (
        <section className='flex flex-col my-4 lg:flex-row'>
          {/* filters section */}
          <section className='flex flex-col hidden w-1/5 px-10 lg:flex divide-y'>
            <h3 className='text-light-grey font-bold'>Filtros</h3>
            <section className='flex flex-col'>
              <div className='mt-5'>
                <h4 className='text-light-grey font-medium'>Marca</h4>
                <div className='mt-2'>{productsBrands}</div>
              </div>
            </section>
            <section className='flex flex-col'>
              <div className='mt-5'>
                <h4 className='text-light-grey font-medium'>
                  Tipo de producto
                </h4>
                <div className='mt-2'>{productsTypes}</div>
              </div>
            </section>
            <section className='flex flex-col'>
              <div className='mt-5'>
                <h4 className='text-light-grey font-medium'>
                  Estados de producto
                </h4>
                <div className='mt-2'>{productStatus}</div>
              </div>
            </section>
          </section>

          {/* products section */}
          <section className='flex flex-col items-center w-full md:items-start lg:w-4/5'>
            <h1 className='text-xl mb-5 text-light-grey font-bold md:ml-5'>{`${items.length} Producto(s)`}</h1>
            <section className='flex flex-col w-full items-center pl-5 gap-5 md:flex-row md:flex-wrap md:gap-7'>
              {componentItems}
            </section>
          </section>
        </section>
      );
    }
    return null;
  };

  return <>{getInfo()}</>;
}
