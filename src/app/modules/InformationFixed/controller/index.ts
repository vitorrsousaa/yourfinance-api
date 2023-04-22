import { Request, Response } from 'express';
import RegistrationInformation from '../useCases/RegistrationInformation';
import UpdatedMyInfos from '../useCases/UpdateMyInfos';
import ViewMyInformationFixed from '../useCases/ViewMyInformationFixed';

class InformationFixedController {
  async registrationInformations(request: Request, response: Response) {
    const {
      time,
      infosTransactionFixed,
    } = request.body;
    const registration = await RegistrationInformation(
      time,
      infosTransactionFixed,
      request.user.id
    );

    return response.status(201).json(registration);
  }

  async viewMyInformationFixed(request: Request, response: Response) {
    const view = await ViewMyInformationFixed(request.user.id);

    return response.status(200).json(view);
  }

  async updateInfos(request: Request, response: Response) {
    const { idInformation, whichInformation, newValueInformation } = request.body;
    const update = await UpdatedMyInfos(
      request.user.id,
      idInformation,
      whichInformation,
      newValueInformation
    );

    return response.status(200).json(update);
  }
}

export default new InformationFixedController();
