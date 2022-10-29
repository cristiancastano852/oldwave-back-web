import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { BiFilterAlt } from 'react-icons/bi';
import OldwaveLogo from 'assets/logos/oldwave-logo-horizontal.png';
import LoginButton from 'components/atoms/LoginButton';
import LogOutButton from 'components/atoms/LogOutButton';
import ButtonAndIcon from 'components/atoms/ButtonAndIcon';
import DropMenu from 'components/molecules/DropMenu';
import 'styles/NavBar.css';
import { useUserState } from 'hooks/useUserState';

export default function NavBar() {
  const { isAuthenticated } = useUserState();
  const [value, setValue] = useState('');
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
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

  const handleMenuToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleFilter = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  return (
    <nav>
      <div className='absolute top top-12 left-8 z-40'>
        {navbarOpen ? (
          <DropMenu toggle={handleMenuToggle} filterHandeler={handleFilter} />
        ) : null}
      </div>
      <section className='flex mx-5 mt-5 justify-between md:mx-20'>
        <div className='flex flex-row'>
          <button
            type='button'
            className='flex items-center mr-5 md:hidden'
            onClick={handleMenuToggle}
          >
            {navbarOpen ? (
              <MdClose className='h-5 w-5 text-violet md:hidden' />
            ) : (
              <AiOutlineMenu className='h-5 w-5 text-violet md:hidden' />
            )}
          </button>
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
          {isAuthenticated ? <LogOutButton /> : <LoginButton isNavBar />}
          {isAuthenticated && (
            <a href='/profile'>
              <BsPersonCircle
                alt='login and profile icon'
                className='h-7 w-7 mx-2 text-violet'
              />
            </a>
          )}
          <AiOutlineShoppingCart
            alt='login and profile icon'
            className='h-7 w-7 mx-2 text-violet'
            onClick={() => navigate('/cart')}
          />
          <span />
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
        <ButtonAndIcon
          onClick={handleFilter}
          icon={<BiFilterAlt className='inline' />}
          text='Filtros'
          otherStyles='hidden md:block text-white rounded-2xl border border-white py-2 px-8'
          textStyle='text-white '
          responsive
        />
      </section>
      {isFilterMenuOpen ? (
        <section className='flex flex-col md:flex-row md:divide-x'>
          <div>
            <h3 className='filters-title'>Categorías sugeridas</h3>
          </div>
          <div>
            <h3 className='filters-title'>Productos sugeridos</h3>
          </div>
          <div>
            <h3 className='filters-title'>Resultados</h3>
          </div>
        </section>
      ) : null}
    </nav>
  );
}
