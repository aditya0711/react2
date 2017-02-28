/**
 * Created by adityaaggarwal on 24/2/17.
 */
import { put, call } from 'redux-saga/effects';
import { getListOfProducts } from '../Api/api';
import * as types from '../constants/actionTypes';


export default function* productSagas() {
  try {
    const products = yield call(getListOfProducts);
    yield [
      put({ type: types.GET_LIST_OF_PRODUCTS_SUCCESS, products })
    ];
  } catch (error) {
    yield put({ type: types.GET_LIST_OF_PRODUCTS_FAILURE, error });
  }
}
