import React from 'react';
import bannerImg from 'assets/icons/banner-blackfriday.png';
import carroIcon from 'assets/icons/icon-carro.svg';
import motoIcon from 'assets/icons/icon-moto.svg';
import ropaIcon from 'assets/icons/icon-ropa.svg';
import deporteIcon from 'assets/icons/icon-deporte.svg';
import { Category } from 'components/molecules/Category';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <img src={bannerImg} alt='Banner Black Friday' className='' />
      <h1 className='text-lg font-bold md:text-2xl text-violet'>
        ¿Qué estás buscando hoy?
      </h1>
      <div className='flex items-center justify-center gap-16 h-48'>
        <Category image={carroIcon} cate='Carros' />
        <Category image={motoIcon} cate='Motos' />
        <Category image={ropaIcon} cate='Ropa' />
        <Category image={deporteIcon} cate='Deporte' />
      </div>
    </div>
  );
}
