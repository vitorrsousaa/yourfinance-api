import { Request, Response } from 'express';
import RegistrationInformation from '../useCases/RegistrationInformation';
import UpdatedMyInfos from '../useCases/UpdateMyInfos';
import ViewMyInformationFixed from '../useCases/ViewMyInformationFixed';

class InformationFixedController {
  async registrationInformations(request: Request, response: Response) {
    const { fixedIncome, fixedOutcome } = request.body;
    const registration = await RegistrationInformation(fixedIncome, fixedOutcome, request.user.id);

    return response.status(201).json(registration);
  }

  async viewMyInformationFixed(request: Request, response: Response) {
    const view = await ViewMyInformationFixed(request.user.id);

    return response.status(200).json(view);
  }

  async updateInfos(request: Request, response: Response) {
    const { fixedIncome, fixedOutcome } = request.body;
    const update = await UpdatedMyInfos(request.user.id, fixedIncome, fixedOutcome);

    return response.status(200).json(update);
  }
}

export default new InformationFixedController();
