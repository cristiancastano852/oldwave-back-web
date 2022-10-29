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
// import UserDataNotFounded from 'pages/UserDataNotFounded';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from 'components/atoms/Loading';

function App() {
  const { isAuthenticated, userCreated } = useUserState();
  const { isLoading } = useAuth0();

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
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
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

  if (isLoading) {
    return <Loading />;
  }

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
