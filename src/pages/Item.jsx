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
        className='object-cover w-56 h-52 md:w-96 md:object-contain'
      />
    </SwiperSlide>
  ));

  const getItemInfo = () => {
    if (loading) {
      return <Loading />;
    }
    if (itemToShow) {
      return (
        <>
          <section className='flex flex-col items-center w-full mt-10 lg:flex-row'>
            <div className='flex w-full items-center mt-5 px-2 md:w-2/3 lg:w-1/2'>
              <Swiper
                navigation
                modules={[Navigation]}
                className='mySwiper w-full justify-center content center'
              >
                {itemImages}
              </Swiper>
            </div>
            <div className='flex flex-col items-center w-full mt-5'>
              <h3 className='text-center text-2xl font-medium px-3 pt-3 md:text-5xl'>
                {itemToShow.name}
              </h3>
              <h4 className='text-center text-violet text-base mt-2 font-medium px-3'>
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
              <div className='flex flex-row w-2/3 items-center justify-between px-5 text-xs md:text-base md:w-1/3'>
                <h4>{itemToShow.productSeller?.addressCity?.name}</h4>
                <h4>{itemToShow.productSeller?.sellerName}</h4>
              </div>
              <div className='flex mt-5 w-2/3 items-center justify-center md:2/5'>
                <button
                  className='w-4/5 bg-violet px-2 pb-1 rounded-2xl md:w-1/2'
                  type='button'
                  // onClick={() => context.addProductToCart(itemToShow)}
                >
                  <span className='text-white text-bold text-sm md:text-base'>
                    Agregar al carrito
                  </span>
                </button>
              </div>
            </div>
          </section>
          <div className='flex items-center justify-center pb-5 w-full'>
            <p className='w-4/5 break-all text-center mt-7 px-2 text-sm md:text-base'>
              {itemToShow.description}
            </p>
          </div>
        </>
      );
    }
    return null;
  };

  return <>{getItemInfo()}</>;
}
