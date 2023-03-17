import axios from "axios"
import getConfig from 'next/config'

const params = {
    headers: {
        Authorization: "bearer " + process.env.STRIPE_API_KEY,
    },
};

export const fetchDataAPI = async (url) => {
  try {
    const {data} = await axios.get(`${process.env.BASE_URL}${url}`, params); 
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
}
  
export const getCategories = async () => {
  try {
    return fetchDataAPI("/api/categories?populate=*");
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const getCategoryProduct = async (id, page) => {
  try {
    return fetchDataAPI(`/api/products?pagination[page]=${page}&pagination[pageSize]=10&populate=*&[filters][categories][id]=${id}`);
  } catch (err) {
    console.log(err);
    return err;
  }
}


export const getProducts = async (page) => {
  try {
    const url = page != undefined ? `/api/products?pagination[page]=${page}&pagination[pageSize]=10&populate=*`
    :`/api/products?populate=*`;
    return fetchDataAPI(url);
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const getProductById = async (id) => {
  try {
    return fetchDataAPI(`/api/products/${id}?populate=*`);
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const getRelatedProducts = async (productId, categoryId) => {
  try {
    return fetchDataAPI(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`);
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const searchProduct = async (query) => {
  try {
    return fetchDataAPI(`/api/products?populate=*&filters[title][$contains]=${query}`);
    //return fetchDataAPI(`/api/products?populate=*`);
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function withBaseUrl(url) {
  const { publicRuntimeConfig } = getConfig();
  const  BASE_URL = publicRuntimeConfig.BASE_URL;
  return `${BASE_URL}${url}` 
}

export const makePaymentRequest = axios.create({
    ...params,
    baseURL: process.env.BASE_URL,
});
