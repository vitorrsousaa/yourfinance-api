import { Router } from 'express';
import TransactionController from '../controllers/TransactionController';

const transactionsRoutes = Router();

transactionsRoutes.get('/', TransactionController.index);
transactionsRoutes.post('/', TransactionController.store);
transactionsRoutes.delete('/:transactionId', TransactionController.delete);

export default transactionsRoutes;
