import { Router } from 'express';
import AuthController from './app/controllers/authController';
import ModalityController from './app/controllers/ModalityController';
import TransactionController from './app/controllers/TransactionController';
import authValidate from './app/middlewares/auth';

export const router = Router();

router.post('/modality', ModalityController.store);
router.get('/modality', ModalityController.index);

router.post('/auth/register', AuthController.register);
router.post('/auth/authenticate', AuthController.authenticate);

router.use(authValidate);

router.get('/transactions', TransactionController.index);
router.post('/transactions', TransactionController.store);
router.delete('/transactions/:transactionId', TransactionController.delete);

router.get('/projects', (req, res) => {
  res.send({ ok: true, id: req.user.id });
});
