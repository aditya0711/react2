const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const SHUTTER_CLIENT_ID = '3434a56d8702085b9226';
const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578';

const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
};

export const shutterStockVideos = (searchQuery) => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`;
  return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
  .then(response => {
    return response.json();
  })
  .then(json => {
      return json.data.map(({ id, assets, description }) => ({
        id,
        mediaUrl: assets.preview_mp4.url,
        description
      }));
  });
};

export const flickrImages = (searchQuery) => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`;
  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.photos.photo.map(({ farm, server, id, secret, title }) => ({
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    });
};

export const getListOfProducts = () => {
  const API_URL_GET_PRODUCTS = 'http://localhost:3001/api/v1/product';
  return fetch(API_URL_GET_PRODUCTS)
    .then(response => {
      console.log("ListOfAllProductAPI: " +  JSON.stringify(response));
      return response.json()
    })
    .then(json=> {
      return json.data.products;
    })
}
export const getProduct = (productID) => {
  const API_URL_GET_PRODUCT = 'http://localhost:3001/api/v1/product/' + productID;
  return fetch(API_URL_GET_PRODUCT)
    .then(response => {
      return response.json()
    })
    .then(json=> {
      console.log(JSON.stringify(json));
      return json.suc
      //return json.products
    })
}

export const addProduct = (product) => {
  //add product params.
  const API_URL_ADD_PRODUCT = 'http://localhost:3001/api/v1/product/addProduct';
  return fetch(API_URL_ADD_PRODUCT)
    .then(response => {
      return response.json()
    })
    .then(json=> {
      console.log(JSON.stringify(json));
      return json.data.products;
    })
}
