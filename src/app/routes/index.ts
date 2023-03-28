import { Router } from 'express';
import authValidate from '../middlewares/auth';
import analyticsRoutes from './analytics.routes';
import authRoutes from './auth.routes';
import categoryRoutes from './category.routes';
import modalityRoutes from './modality.routes';
import overviewRoutes from './overview.routes';
import transactionsRoutes from './transactions.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/api/modality', modalityRoutes);
routes.use('/api/category', categoryRoutes);
routes.use('/api/auth', authRoutes);
routes.use('/api/transactions', authValidate, transactionsRoutes);
routes.use('/api/user', authValidate, userRoutes);
routes.use('/api/overview', authValidate, overviewRoutes);
routes.use('/api/analytics', authValidate, analyticsRoutes);

export default routes;
