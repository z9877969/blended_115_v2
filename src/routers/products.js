import { Router } from 'express';
import { getAllProductsController } from '../controllers/products.js';

export const productsRouter = Router();

productsRouter.get('/', getAllProductsController);
