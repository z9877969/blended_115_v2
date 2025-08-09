import { Router } from 'express';
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
} from '../controllers/products.js';

export const productsRouter = Router();

productsRouter.get('/', getAllProductsController);

productsRouter.get('/:productId', getProductByIdController);

productsRouter.post('/', createProductController);
