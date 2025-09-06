import Joi from 'joi';

export const productsCreatingSchema = Joi.object({
  name: Joi.string().min(1).max(24).required(),
  price: Joi.number().min(0).max(2000000).required(),
  category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
  description: Joi.string(),
});

export const productsUpdatingSchema = Joi.object({
  name: Joi.string().min(1).max(24),
  price: Joi.number().min(0).max(2000000),
  category: Joi.string().valid('books', 'electronics', 'clothing', 'other'),
  description: Joi.string(),
});
