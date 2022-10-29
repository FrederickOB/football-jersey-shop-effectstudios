// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export const getBanner = async () => {
  try {
    const res = await axios.get(`/banner`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getPopularProducts = async () => {
  try {
    const res = await axios.get(`/popular-products`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getCollectionsCategories = async () => {
  try {
    const res = await axios.get(`/product-category`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getSingleCollectionCategory = async ({ slug }) => {
  try {
    const res = await axios.get(`/product-category-slug/${slug}`);
    if (res.status === 200) {
      return res.data.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getSingleProduct = async (slug) => {
  try {
    const res = await axios.get(`/product-single/${slug}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
