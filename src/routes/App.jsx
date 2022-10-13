import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from 'containers/Layout';
import Home from 'pages/Home';
import Search from 'pages/Search';
import Item from 'pages/Item';
import GlobalState from 'context/GlobalState';
import Cart from 'pages/Cart';

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path='/item/:itemId' element={<Item />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<p>There is nothing here: 404!</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
