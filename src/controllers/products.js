import createHttpError from 'http-errors';
import { getAllProducts, getProductsById } from '../services/products.js';
import { isValidObjectId } from 'mongoose';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProducts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  if (!isValidObjectId(productId)) {
    throw createHttpError(400, 'Invalid id');
  }
  const product = await getProductsById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};
