import Footer from 'components/molecules/Footer';
import NavBar from 'components/organism/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
