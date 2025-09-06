import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { userRegistrationSchema } from '../validation/user.js';
import { registerUser } from '../controllers/user.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userRegistrationSchema),
  registerUser,
);
authRouter.post('/login', (req, res) => {});
