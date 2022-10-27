import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'containers/Layout';
import Home from 'pages/Home';
import Search from 'pages/Search';
import Item from 'pages/Item';
import Cart from 'pages/Cart';
import Profile from 'pages/Profile';
import NotFounded from 'pages/NotFounded';
import { useUserState } from 'hooks/useUserState';
import LoginFirst from 'pages/LoginFirst';
import UserDataNotFounded from 'pages/UserDataNotFounded';

function App() {
  const { isAuthenticated, userCreated } = useUserState();

  const renderRoutes = () => {
    if (isAuthenticated) {
      if (userCreated) {
        return (
          <>
            <Route path='/cart' element={<Cart />} />
            <Route path='/profile' element={<Profile />} />
          </>
        );
      }
      return (
        <>
          <Route path='/cart' element={<UserDataNotFounded />} />
          <Route path='/profile' element={<UserDataNotFounded />} />
        </>
      );
    }
    return (
      <>
        <Route path='/cart' element={<LoginFirst />} />
        <Route path='/profile' element={<LoginFirst />} />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/item/:itemId' element={<Item />} />
          {renderRoutes()}
          <Route path='*' element={<NotFounded />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
