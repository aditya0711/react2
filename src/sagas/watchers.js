import { takeLatest } from 'redux-saga';
import searchMediaSaga from './mediaSagas';
import productSagas from './productsSagas';
import addProductSagas from './addProductSagas';
import * as types from '../constants/actionTypes';

export default function* watchSearchMedia() {
  yield* takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
};

export default function* watchGetProducts() {
  yield* takeLatest(types.GET_LIST_OF_PRODUCTS, productSagas);
};

export default function* watchAddProduct() {
  yield* takeLatest(types.ADD_PRODUCT, addProductSagas);
};
