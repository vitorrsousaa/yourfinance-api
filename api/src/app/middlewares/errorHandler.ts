import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export default function errorHandler(
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  next: NextFunction
) {
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
