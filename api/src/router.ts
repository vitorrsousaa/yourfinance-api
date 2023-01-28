import { Router } from 'express';
import AuthController from './app/controllers/authController';
import authValidate from './app/middlewares/auth';

export const router = Router();

router.post('/auth/register', AuthController.register);
router.post('/auth/authenticate', AuthController.authenticate);

router.use(authValidate);

router.get('/projects', (req, res) => {
  res.send({ ok: true, id: req.user.id });
});
