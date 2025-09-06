import createHttpError from 'http-errors';

export const validateBody = (schema) => {
  return (req, _, next) => {
    try {
      const { error } = schema.validate(req.body, {
        abortEarly: false,
      });

      if (error) {
        throw createHttpError(400, error.message);
      }

      next(); // ->
    } catch (error) {
      next(error); // X
    }
  };
};
