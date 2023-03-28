import { Router } from 'express';

import OverviewController from '../modules/Overview/controller';

const overviewRoutes = Router();

overviewRoutes.get('/getCalculations/:categoryId', OverviewController.getCalculationsByCurrentMonthAndLastMonth);

export default overviewRoutes;
