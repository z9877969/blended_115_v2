import { userSchema } from '../db/models/user.js';
import { registerUserSevice } from '../services/auth.js';

export const registerUser = async (req, res) => {
  const user = await registerUserSevice(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user',
    data: user,
  });
};
