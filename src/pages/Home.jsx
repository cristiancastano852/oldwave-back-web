import React from 'react';
import bannerImg from 'assets/banners/banner-blackfriday.png';
import bannerOrdenadores from 'assets/banners/banner-auxilar-ordenadores.png';
import bannerBicicletas from 'assets/banners/banner-auxiliar-bicicletas.png';
import celularImg from 'assets/banners/producto1.png';
import camaraImg from 'assets/banners/producto2.png';
import portatilImg from 'assets/banners/producto3.png';
import tabletImg from 'assets/banners/producto4.png';
import tvImg from 'assets/banners/tvImg.jpg';
import lavadoraImg from 'assets/banners/lavadoraImg.jpg';
import carroIcon from 'assets/icons/icon-carro.svg';
import motoIcon from 'assets/icons/icon-moto.svg';
import ropaIcon from 'assets/icons/icon-ropa.svg';
import deporteIcon from 'assets/icons/icon-deporte.svg';
import muebleIcon from 'assets/icons/icon-mueble.svg';
import computadorIcon from 'assets/icons/icon-computadores.svg';
import celularIcon from 'assets/icons/icon-celular.svg';
import tvIcon from 'assets/icons/icon-tv.svg';
import electrodomesticosIcon from 'assets/icons/icon-electrodomesticos.svg';
import { Category } from 'components/atoms/Category';
import ItemCard from 'components/molecules/ItemCard';

export default function Home() {
  const items = [
    {
      id: 1,
      name: 'Celular',
      thumbnail: celularImg,
      value: 800000,
      category: 'Celulares',
      rating: 4,
      seller: 'smartShop',
      brand: 'Samsung',
    },
    {
      id: 2,
      name: 'Camara',
      thumbnail: camaraImg,
      value: 600000,
      category: 'Camara',
      rating: 5,
      seller: 'lensShop',
      brand: 'Nokia',
    },
    {
      id: 3,
      name: 'Portatil',
      thumbnail: portatilImg,
      value: 2500000,
      category: 'Portatil',
      rating: 4,
      seller: 'techShop',
      brand: 'Asus',
    },
    {
      id: 4,
      name: 'Tablet',
      thumbnail: tabletImg,
      value: 1500000,
      category: 'Tablet',
      rating: 3,
      seller: 'Juan',
      brand: 'Dell',
    },
    {
      id: 5,
      name: 'Televisor 4k',
      thumbnail: tvImg,
      value: 1000000,
      category: 'Televisores',
      rating: 4,
      seller: 'Exito',
      brand: 'Sony',
    },
    {
      id: 6,
      name: 'Lavadora',
      thumbnail: lavadoraImg,
      value: 950000,
      category: 'Electrodomesticos',
      rating: 5,
      seller: 'Exito',
      brand: 'LG',
    },
  ];

  const componentItems = items.map((item2) => (
    <ItemCard
      // onReturn={onReturn}
      key={item2.id}
      img={item2.thumbnail}
      name={item2.name}
      price={item2.value}
      city={item2.productSeller?.addressCity?.name}
      stars={item2.rating}
      seller={item2.seller}
      brand={item2.brand}
      // onAddCart={() => context.addProductToCart(item2)}
    />
  ));

  return (
    <div className='flex flex-col items-center'>
      <div className='w-full'>
        <img className='w-full' src={bannerImg} alt='Banner Black Friday' />
      </div>
      <h1 className='text-lg font-bold py-8 md:text-2xl text-violet'>
        ¿Qué estás buscando hoy?
      </h1>
      <div className='flex snap-x w-full px-5 overflow-x-auto items-center justify-start md:justify-center gap-16 h-48'>
        <Category image={carroIcon} cate='Carros' />
        <Category image={motoIcon} cate='Motos' />
        <Category image={ropaIcon} cate='Ropa' />
        <Category image={deporteIcon} cate='Deporte' />
        <Category image={muebleIcon} cate='Muebles' />
        <Category image={computadorIcon} cate='Computadores' />
        <Category image={celularIcon} cate='Celulares' />
        <Category image={tvIcon} cate='Televisores' />
        <Category image={electrodomesticosIcon} cate='Electrodomesticos' />
      </div>
      <div className='flex flex-col space-y-8'>
        <div className='flex flex-col w-full space-x-8 lg:flex-row'>
          <div className='w-full flex justify-center lg:w-max'>
            <img
              className='h-full w-full'
              src={bannerOrdenadores}
              alt='celular'
            />
          </div>
          <div className='flex flex-row justify-center space-x-8 md:space-x-24 lg:space-x-8'>
            <div className='flex justify-center rounded-md bg-gray-50 p-2 shadow-md'>
              <img className='object-contain' src={celularImg} alt='celular' />
            </div>
            <div className='flex justify-center rounded-md bg-gray-50 shadow-md p-2'>
              <img className='object-contain' src={camaraImg} alt='carama' />
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full space-x-4 lg:flex-row'>
          <div className='flex flex-row justify-center space-x-8 md:space-x-24 lg:space-x-8'>
            <div className='shadow-md'>
              <img
                className='bg-gray-50 rounded-md object-contain'
                src={portatilImg}
                alt='carama'
              />
            </div>
            <div className='shadow-md object-contain'>
              <img
                className='bg-gray-50 rounded-md'
                src={tabletImg}
                alt='carama'
              />
            </div>
          </div>
          <div className=' -order-1 lg:order-1'>
            <img className='' src={bannerBicicletas} alt='carama' />
          </div>
        </div>
      </div>
      <div />
      <h1 className=' flex justify-center w-full text-lg '>
        <span className='title-line relative pt-10 '>
          Productos más recientes
        </span>
      </h1>
      <div className='flex snap-x w-full overflow-x-auto pl-4 justify-start items-center content-center space-x-5 p-4 lg:justify-center'>
        {componentItems}
      </div>
      {/* <div className='flex snap-x w-full overflow-x-auto items-center content-center justify-start space-x-6'>
        {componentItems}
      </div> */}
    </div>
  );
}
