import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody';
import { userRegistrationSchema } from '../validation/user';
export const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(userRegistrationSchema),
  (req, res) => {
    res.json('REGISTER user');
  },
);
authRouter.post('/login', (req, res) => {});
