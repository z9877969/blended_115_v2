import { Product } from '../db/models/product.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};

export const getProductsById = async (productId) => {
  const product = await Product.findById(productId);
  console.log(productId);
  return product;
};

export const createProduct = async (payload) => {
  const newProduct = await Product.create(payload);
  return newProduct;
};
