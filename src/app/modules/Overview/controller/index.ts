import { Request, Response } from 'express';
import GetCalculationsByCurrentMonthAndLastMonth from '../useCases/GetCalculationsByCurrentMonthAndLastMonth';

class OverviewController {
  async getCalculationsByCurrentMonthAndLastMonth(request: Request, response: Response) {
    const getCalculations = await GetCalculationsByCurrentMonthAndLastMonth(request.params.categoryId, request.user.id);

    return response.status(200).json(getCalculations);
  }
}

export default new OverviewController();
