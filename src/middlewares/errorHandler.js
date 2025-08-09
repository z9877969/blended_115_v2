import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  const status = 500;
  err.message;

  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: status,
      message: 'Something went wrong',
      data: err.message,
    });
  } else {
    res.status(err.status).json({
      status: 500,
      message: 'Something went wrong',
      data: err.message,
    });
  }
};
