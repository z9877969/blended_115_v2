import createHttpError from 'http-errors';
import { UserCollection } from '../db/models/user.js';
import bcrypt from 'bcrypt';

export const registerUserSevice = async (payload) => {
  const user = await UserCollection.findOne({ email: payload.email });
  if (user) {
    throw createHttpError(409, 'User is register');
  }
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  payload.password = hashedPassword;

  const newUser = await UserCollection.create(payload);

  return newUser;
};
