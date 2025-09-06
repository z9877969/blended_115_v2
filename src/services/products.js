import { Product } from '../db/models/product.js';

export const getAllProducts = async ({ category, minPrice, maxPrice }) => {
  const options = {};

  if (category) {
    options.category = category;
  }

  if (minPrice && !maxPrice) {
    options.price = { $gte: minPrice };
  }

  if (!minPrice && maxPrice) {
    options.price = { $lte: maxPrice };
  }

  if (minPrice && maxPrice) {
    options.price = { $gte: minPrice, $lte: maxPrice };
  }

  const products = await Product.find(options);
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
