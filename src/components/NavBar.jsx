import React from 'react';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { BiFilterAlt } from 'react-icons/bi';
import OldwaveLogo from 'assets/logos/oldwave-logo-horizontal.png';
import CarritoIcon from 'assets/icons/carrito-icon.svg';

export default function NavBar() {
  return (
    <nav>
      <section className='flex mx-5 mt-5 justify-between md:mx-20'>
        <div className='flex flex-row'>
          <span className='flex items-center mr-5 md:hidden'>
            <AiOutlineMenu className='h-6 w-6 text-violet' />
          </span>
          <span>
            <img
              src={OldwaveLogo}
              alt='logo de oldwave'
              className='h-8 w-32 md:9 md:36'
            />
          </span>
        </div>
        <div className='flex flex-row items-center'>
          <button
            type='button'
            className='py-2 px-7 bg-gh-white rounded-2xl hidden lg:block'
          >
            Registrarse o iniciar sesión
          </button>
          <span>
            <BsPersonCircle
              alt='login and profile icon'
              className='h-7 w-7 mx-5 text-violet'
            />
          </span>
          <span>
            <img
              src={CarritoIcon}
              alt='login and profile icon'
              className='h-8 w-6'
            />
          </span>
        </div>
      </section>
      <section className='flex items-center justify-center space-x-3 md:justify-start h-16 mt-4 bg-violet'>
        <div className='relative items-center md:ml-24 w-4/5 md:w-3/5'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <AiOutlineSearch className='w-5 h-5 mr-4 text-violet' />
          </div>
          <input
            type='text'
            id='input-group-1'
            className='bg-white text-gray-900 text-sm rounded-2xl w-full pl-10 p-2.5'
            placeholder='Estoy buscando...'
          />
        </div>
        <button
          type='button'
          className='hidden text-white rounded-2xl border border-white py-2 px-8 lg:block'
        >
          Buscar
        </button>
        <button
          type='button'
          className='flex flex-row items-center space-x-1 hidden text-white rounded-2xl border border-white py-2 px-5 lg:block'
        >
          <BiFilterAlt className='inline' />
          <span>Filtros</span>
        </button>
      </section>
    </nav>
  );
}
