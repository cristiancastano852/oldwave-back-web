import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { BiFilterAlt } from 'react-icons/bi';
import OldwaveLogo from 'assets/logos/oldwave-logo-horizontal.png';
import CarritoIcon from 'assets/icons/carrito-icon.svg';
import LoginButton from 'components/atoms/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogOutButton from 'components/atoms/LogOutButton';

export default function NavBar() {
  const { isAuthenticated } = useAuth0();
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      // redirect to /search
      navigate(`/search?query=${value}`);
    }
  };

  const handleHomeCLick = (event) => {
    event.preventDefault();
    navigate('/');
  };

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
              onClick={handleHomeCLick}
              aria-hidden='true'
            />
          </span>
        </div>
        <div className='flex flex-row items-center'>
          {isAuthenticated ? <LogOutButton /> : <LoginButton />}
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
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='input-group-1'
              value={value}
              onChange={handleChange}
              className='bg-white text-gray-900 text-sm rounded-2xl w-full pl-10 p-2.5'
              placeholder='Estoy buscando...'
              required
            />
          </form>
        </div>
        <button
          type='button'
          className='hidden text-white rounded-2xl border border-white py-2 px-8 lg:block'
          onClick={handleSubmit}
        >
          Buscar
        </button>
        <button
          type='button'
          className='flex flex-row items-center space-x-1 hidden text-white rounded-2xl border border-white py-2 px-5 lg:block'
        >
          <BiFilterAlt className='inline' />
          <span className='text-white'>Filtros</span>
        </button>
      </section>
    </nav>
  );
}
