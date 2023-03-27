import { Request, Response } from 'express';
import SumTotalAmountByMonth from '../useCases/SumTotalAmountByMonth';

class AnalyticsController {
  async sumTotalAmountByMonth(request: Request, response: Response) {
    const getAmount = await SumTotalAmountByMonth(request.user.id);

    return response.status(200).json(getAmount);
  }
}

export default new AnalyticsController();
