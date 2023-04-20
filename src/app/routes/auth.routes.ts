import { Router } from 'express';
import AuthController from '../modules/Auth/controllers';
import authValidate from '../middlewares/auth';

const authRoutes = Router();

authRoutes.post('/register', AuthController.register);
authRoutes.post('/authenticate', AuthController.authenticate);
authRoutes.post('/refresh', authValidate, AuthController.refreshToken);

export default authRoutes;
