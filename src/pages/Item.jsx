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
import Loading from 'components/atoms/Loading';

export default function Item() {
  const [itemToShow, setItemToShow] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pictures, setPictures] = useState([]);
  const { itemId } = useParams();
  const itemIdParsed = itemId.substring(0, 25);

  useEffect(() => {
    const fetchItem = async () => {
      setLoading(true);
      axios
        .get(`https://asac-back-dev.azurewebsites.net/products/${itemIdParsed}`)
        .then(({ data }) => {
          setItemToShow(data);
          setPictures(data.images);
        });
      setLoading(false);
    };
    fetchItem();
  }, [itemIdParsed]);

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

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
    if (loading) {
      return <Loading />;
    }
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
            {itemToShow.name}
          </h3>
          <h4 className='text-center text-violet text-xs font-medium px-3 pt-3'>
            {itemToShow.brand}
          </h4>
          <div className='flex flex-row w-2/3 items-center justify-between px-5 pt-5 md:w-1/3'>
            <h4 className='font-bold text-sm text-violet md:text-base'>
              {formatterPeso.format(itemToShow.value)}
            </h4>
            <div className='flex flex-row items-center'>
              <span>
                <AiFillStar className='h-6 w-6 text-violet pr-1' />
              </span>
              <h4 className='text-sm md:text-base'>{itemToShow.rating}</h4>
            </div>
          </div>
          <div className='flex flex-row w-2/3 items-center justify-between px-5 text-xxs md:text xs md:w-1/3'>
            <h4>{itemToShow.productSeller?.addressCity?.name}</h4>
            <h4>{itemToShow.productSeller?.sellerName}</h4>
          </div>
          <p className='w-2/3 text-center mt-7 px-2 text-xxs md:text-xs'>
            {itemToShow.description}
          </p>
        </section>
      );
    }
    return null;
  };

  return <>{getItemInfo()}</>;
}
