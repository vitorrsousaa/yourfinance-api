import { Request, Response } from 'express';
import SumTotalAmountByMonth from '../useCases/SumTotalAmountByMonth';
import GetCalculationsByCurrentMonthAndLastMonth from '../useCases/GetCalculationsByCurrentMonthAndLastMonth';
import GetBiggestAmountsOfModalitiesOnSixMonthsAgo from '../useCases/GetBiggestAmountsOfModalitiesOnSixMonthsAgo';

class AnalyticsController {
  async sumTotalAmountByMonth(request: Request, response: Response) {
    const getAmount = await SumTotalAmountByMonth(request.user.id);

    return response.status(200).json(getAmount);
  }

  async getCalculationsByCurrentMonthAndLastMonth(request: Request, response: Response) {
    const getCalculations = await GetCalculationsByCurrentMonthAndLastMonth(request.params.categoryId, request.user.id);

    return response.status(200).json(getCalculations);
  }

  async getBiggestAmountsOfModalitiesOnSixMonthsAgo(request: Request, response: Response) {
    const get = await GetBiggestAmountsOfModalitiesOnSixMonthsAgo(request.user.id);

    return response.status(200).json(get);
  }
}

export default new AnalyticsController();
