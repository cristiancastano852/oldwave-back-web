import React from 'react';
import bannerImg from 'assets/banner-blackfriday.png';
import carroIcon from 'assets/icons/icon-carro.svg';
import motoIcon from 'assets/icons/icon-moto.svg';
import ropaIcon from 'assets/icons/icon-ropa.svg';
import deporteIcon from 'assets/icons/icon-deporte.svg';
import muebleIcon from 'assets/icons/icon-mueble.svg';
import computadorIcon from 'assets/icons/icon-computadores.svg';
import celularIcon from 'assets/icons/icon-celular.svg';
import { Category } from 'components/atoms/Category';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <img src={bannerImg} alt='Banner Black Friday' />
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
      </div>
    </div>
  );
}
