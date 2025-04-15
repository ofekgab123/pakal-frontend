import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import BlogPage from '../pages/BlodgPage';
import OrderPage from '../pages/OrderPage';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/home" Component={Home} />
      <Route path="/product" Component={ProductPage} />
      <Route path="/blog" Component={BlogPage} />
      <Route path="/order" Component={OrderPage} />
    </Routes>
  );
};

export default Routing;
