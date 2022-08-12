import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { AiFillStar } from 'react-icons/ai';
import 'swiper/css';
import 'swiper/css/navigation';
import 'styles/item.css';
import { nanoid } from 'nanoid';

export default function Item() {
  const [itemToShow, setItemToShow] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [itemDesc, setItemDesc] = useState('');
  const { itemId } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.mercadolibre.com/items/${itemId}`)
      .then(({ data }) => {
        setItemToShow(data);
        setPictures(data.pictures);
      });

    axios
      .get(`https://api.mercadolibre.com/items/${itemId}/description`)
      .then(({ data }) => {
        setItemDesc(data.plain_text);
      });
  }, [itemId]);

  const itemImages = pictures.map((itemImg) => (
    <SwiperSlide className='swiper-slide' key={nanoid()}>
      <img
        src={itemImg.url}
        alt=''
        className='object-cover w-60 h-52 md:w-96 md:h-90'
      />
    </SwiperSlide>
  ));

  const getItemInfo = () => {
    if (itemToShow) {
      return (
        <section className='flex flex-col items-center w-full my-10'>
          <div className='flex w-full items-center mt-5 md:w-2/3 lg:w-1/2'>
            <Swiper
              navigation
              modules={[Navigation]}
              className='mySwiper w-full justify-center content center'
            >
              {itemImages}
            </Swiper>
          </div>
          <h3 className='text-center text-sm font-medium px-3 pt-3 md:text-base'>
            {itemToShow.title}
          </h3>
          <h4 className='text-center text-xxs font-medium text-violet pt-1 px-3 md:text-xs'>
            {itemToShow.condition}
            {/* Item2.condition shoulbe changed for brand in oldwave api */}
          </h4>
          <div className='flex flex-row w-2/3 items-center justify-between px-5 md:w-1/3'>
            <h4 className='font-bold text-sm text-violet md:text-base'>{`$ ${itemToShow.price}`}</h4>
            <div className='flex flex-row items-center'>
              <span>
                <AiFillStar className='h-6 w-6 text-violet pr-1' />
              </span>
              <h4 className='text-sm md:text-base'>4.6</h4>
            </div>
          </div>
          <div className='flex flex-row w-2/3 items-center justify-between px-5 text-xxs md:text xs md:w-1/3'>
            <h4>{itemToShow.seller_address?.city?.name}</h4>
            <h4>{itemToShow.seller_id}</h4>
          </div>
          <p className='w-2/3 text-center mt-1 px-2 text-xxs md:text-xs'>
            {itemDesc}
          </p>
        </section>
      );
    }
    return null;
  };

  return <>{getItemInfo()}</>;
}
