import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const validateId = (req, res, next) => {
  // {id: "654654654654654"} = req.params -> [[id, "654654654654654"]]
  const isInvalidParam = Object.entries(req.params)
    .filter(([paramKey, paramValue]) => paramKey.toLowerCase().endsWith('id'))
    .some(([paramKey, paramValue]) => {
      if (!isValidObjectId(paramValue)) return true;
      return false;
    });

  try {
    if (isInvalidParam) {
      throw createHttpError(400, 'Invalid id');
    }
    next();
  } catch (error) {
    next(error);
  }
};
