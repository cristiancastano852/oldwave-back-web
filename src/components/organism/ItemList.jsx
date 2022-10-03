import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCard from 'components/molecules/ItemCard';

export default function ItemList({ query }) {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const [itemSelected, setItemSelected] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      await axios
        .get(`https://asac-back-dev.azurewebsites.net/products?search=${query}`)
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
      navigate(`/item/${item.id}`);
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
      />
    );
  });

  const getInfo = () => {
    if (!itemSelected) {
      return (
        <section className='flex flex-col w-full items-center my-4'>
          <h1 className='text-lg mb-5'> {`${items.length} Resultados`}</h1>
          <section className='flex flex-row flex-wrap w-full items-center px-5 gap-5 md:gap-7'>
            {componentItems}
          </section>
        </section>
      );
    }
    return null;
  };

  return <>{getInfo()}</>;
}
