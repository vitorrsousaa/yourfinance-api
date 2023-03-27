import { Router } from 'express';

import AnalyticController from '../modules/Analytics/controller';

const analyticsRoutes = Router();

analyticsRoutes.get('/sumAmountsByMonth', AnalyticController.sumTotalAmountByMonth);

export default analyticsRoutes;
