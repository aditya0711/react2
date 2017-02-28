import { combineReducers } from 'redux';
import images from './imageReducer';
import videos from './videoReducer';
import products from './productReducer';

const rootReducer = combineReducers({
  images, videos, products
});

export default rootReducer;
