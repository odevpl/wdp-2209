import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/bootstrap.scss';
import './styles/global.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from './components/views/Homepage/Homepage';
import ProductList from './components/views/ProductList/ProductList';
import ProductPage from './components/views/ProductPage/ProductPage';
import SearchPage from './components/views/SearchPage/SearchPage';
import Blog from './components/views/Blog/Blog';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/shop/:categoryId'} element={<ProductList />} />
          <Route path={'/product/:productId'} element={<ProductPage />} />
          <Route path={'/search'} element={<SearchPage />} />
          <Route path={'/blog'} element={<Blog />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
