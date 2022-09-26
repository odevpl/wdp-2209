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
import SearchPage from './components/views/SearchPage/SearchPage';

import Blog from './components/views/Blog/Blog';
=======import CartPage from './components/views/CartPage/CartPage';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>

      <MainLayout>
        <Routes>
          <Route path={'/'} element={<Homepage />} />
          <Route path={'/shop/:categoryId'} element={<ProductList />} />
          <Route path={'/product/:productId'} element={<ProductPage />} />
          <Route path={'/blog'} element={<Blog />} />
        </Routes>
      </MainLayout>

      <Switch>
        <Route exact path={'/cart'} component={CartPage} />
        <MainLayout>
          <Switch>
            <Route exact path={'/'} component={Homepage} />
            <Route exact path={'/shop/:categoryId'} component={ProductList} />
            <Route exact path={'/product/:productId'} component={ProductPage} />
            <Route exact path={'/search'} component={SearchPage} />
          </Switch>
        </MainLayout>
      </Switch>

    </BrowserRouter>
  </Provider>
);

export default App;
