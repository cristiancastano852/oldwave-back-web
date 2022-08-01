import NavBar from 'components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <Outlet />
    </div>
  );
}
