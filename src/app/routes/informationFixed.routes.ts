import { Router } from 'express';

import InformationFixedController from '../modules/InformationFixed/controller';

const informationFixedRoutes = Router();

informationFixedRoutes.post('/', InformationFixedController.registrationInformations);
informationFixedRoutes.get('/', InformationFixedController.viewMyInformationFixed);
informationFixedRoutes.patch('/', InformationFixedController.updateInfos);

export default informationFixedRoutes;
