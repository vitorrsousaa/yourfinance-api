import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import authValidate from '../middlewares/auth';

const authRoutes = Router();

authRoutes.post('/auth/register', AuthController.register);
authRoutes.post('/auth/authenticate', AuthController.authenticate);
authRoutes.get('/auth', authValidate, (req, res) => res.send({ ok: true }));

export default authRoutes;
