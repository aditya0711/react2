import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AddProductPage from './containers/AddProductPage';
import ProductListPage from './containers/ProductListPage';
import App from './containers/App';
import HomePage from './components/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="productList" component={ProductListPage} />
    <Route path="addProduct" component={AddProductPage} />
  </Route>
);

