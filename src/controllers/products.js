import createHttpError from 'http-errors';
// import {
//   createProduct,
//   getAllProducts,
//   getProductsById,
// } from '../services/products.js';
import * as s from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  const products = await s.getAllProducts({ category, minPrice, maxPrice });

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await s.getProductsById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await s.createProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created product!',
    data: product,
  });
};
