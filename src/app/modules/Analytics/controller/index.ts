import { Request, Response } from 'express';

import GetBiggestAmountsOfModalitiesOnPeriods from '../useCases/GetBiggestAmountsOfModalitiesOnPeriods';
import GetCalculationsByCurrentMonthAndLastMonth from '../useCases/GetCalculationsByCurrentMonthAndLastMonth';
import SumTotalAmountByMonth from '../useCases/SumTotalAmountByMonth';

class AnalyticsController {
  async sumTotalAmountByMonth(request: Request, response: Response) {
    const getAmount = await SumTotalAmountByMonth(request.user.id);

    return response.status(200).json(getAmount);
  }

  async getCalculationsByCurrentMonthAndLastMonth(request: Request, response: Response) {
    const getCalculations = await GetCalculationsByCurrentMonthAndLastMonth(request.params.categoryId, request.user.id);

    return response.status(200).json(getCalculations);
  }

  async getBiggestAmountsOfModalitiesOnPeriods(request: Request, response: Response) {
    const get = await GetBiggestAmountsOfModalitiesOnPeriods(request.user.id);

    return response.status(200).json(get);
  }
}

export default new AnalyticsController();
