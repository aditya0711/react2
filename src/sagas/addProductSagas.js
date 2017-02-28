/**
 * Created by adityaaggarwal on 24/2/17.
 */
import { put, call } from 'redux-saga/effects';
import { addProducts } from '../Api/api';
import * as types from '../constants/actionTypes';

export default  function* addProductSagas(){
  try {
    const product = yield call(addProducts);
    yield [
      put({ type: types.ADD_PRODUCT_SUCCESS, product })
    ];
  } catch (error) {
    yield put({ type: types.ADD_COMPONENT_FAILURE, error });
  }
}
