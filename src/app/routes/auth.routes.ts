import { Router } from 'express';

import authValidate from '../middlewares/auth';
import AuthController from '../modules/Auth/controller';

const authRoutes = Router();

authRoutes.post('/register', AuthController.register);
authRoutes.post('/authenticate', AuthController.authenticate);
authRoutes.post('/refresh', authValidate, AuthController.refreshToken);

export default authRoutes;
