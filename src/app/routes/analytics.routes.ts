import { Router } from 'express';

import AnalyticController from '../modules/Analytics/controller';

const analyticsRoutes = Router();

analyticsRoutes.get('/sumAmountsByMonth', AnalyticController.sumTotalAmountByMonth);
analyticsRoutes.get('/getSummaryByCategory/:categoryId', AnalyticController.getCalculationsByCurrentMonthAndLastMonth);
analyticsRoutes.get('/getBiggestModalities', AnalyticController.getBiggestAmountsOfModalitiesOnPeriods);
analyticsRoutes.get('/estimativeExpenses', AnalyticController.estimativeExpensesForTheCommingMonths);

export default analyticsRoutes;
