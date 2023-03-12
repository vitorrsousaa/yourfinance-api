import { Router } from 'express';
import authValidate from '../middlewares/auth';
import errorHandler from '../middlewares/errorHandler';
import authRoutes from './auth.routes';
import modalityRoutes from './modality.routes';
import transactionsRoutes from './transactions.routes';

const routes = Router();

routes.use('/api', authRoutes);
routes.use('/api', modalityRoutes);
routes.use('/api', authValidate, transactionsRoutes);

routes.use(errorHandler);

export default routes;
