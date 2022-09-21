import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import Blog from './components/views/Blog/Blog';
import Register from './components/views/Register/Register';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/shop/:categoryId'} element={<ProductList />} />
          <Route path={'/product/:productId'} element={<ProductPage />} />
          <Route path={'/blog'} element={<Blog />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
