import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export default function errorHandler(
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  return response.status(500).json({
    status: 'error',
    message: 'Server not found',
  });
}
