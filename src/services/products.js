import { Product } from '../db/models/product.js';

export const getAllProducts = async () => {
  const products = await Product.find();
  return products;
};
