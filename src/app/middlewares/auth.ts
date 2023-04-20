import { NextFunction, request, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import AppError from '../error';

import authConfig from '../../config/auth.json';

interface PayloadProps {
  id: string;
}

export default function authValidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Não esta autorizado');
  }

  // Verificar se o token esta no formato JWT

  const parts = authHeader.split(' ');

  if (!(parts.length === 2)) {
    throw new AppError('Houve um erro na autenticação');
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    throw new AppError('Houve um erro na autenticação');
  }

  try {
    const payload = jwt.verify(token, authConfig.secret) as PayloadProps;

    request.user = { id: payload.id };

    next();
  } catch (error) {
    throw new AppError('Houve um erro na autenticação', 401);
  }
}
