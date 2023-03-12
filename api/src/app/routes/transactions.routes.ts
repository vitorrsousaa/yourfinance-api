import { Router } from 'express';
import TransactionController from '../controllers/TransactionController';

const transactionsRoutes = Router();

transactionsRoutes.get('/transactions', TransactionController.index);
transactionsRoutes.post('/transactions', TransactionController.store);
transactionsRoutes.delete(
  '/transactions/:transactionId',
  TransactionController.delete
);

export default transactionsRoutes;
