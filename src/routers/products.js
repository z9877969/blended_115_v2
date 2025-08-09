import { Router } from 'express';
import {
  getAllProductsController,
  getProductByIdController,
} from '../controllers/products.js';

export const productsRouter = Router();

productsRouter.get('/', getAllProductsController);

productsRouter.get('/:productId', getProductByIdController);
