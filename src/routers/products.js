import { Router } from 'express';
import {
  createProductController,
  getAllProductsController,
  getProductByIdController,
} from '../controllers/products.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  productsCreatingSchema,
  productsUpdatingSchema,
} from '../validation/products.js';
import { validateId } from '../middlewares/validateId.js';

export const productsRouter = Router();

productsRouter.get('/', getAllProductsController);

productsRouter.get('/:productId', validateId, getProductByIdController);

productsRouter.post(
  '/',
  validateBody(productsCreatingSchema),
  createProductController,
);
productsRouter.patch(
  '/:id',
  validateId,
  validateBody(productsUpdatingSchema),
  (req, res) => {
    res.json('PATCH product');
  },
);

productsRouter.delete('/:removedProdId', validateId, (req, res) => {
  res.json('REMOVE product');
});
