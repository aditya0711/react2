/**
 * Created by adityaaggarwal on 24/2/17.
 */
import * as types from '../constants/actionTypes';


export const selectListProducts = (products) => ({
  type: types.GET_LIST_OF_PRODUCTS,
  products
});



