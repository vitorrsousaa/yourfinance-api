import { Router } from 'express';

import FeedbackController from '../modules/Feedback/controller';

const feedbackRoutes = Router();

feedbackRoutes.post('/', FeedbackController.create);

export default feedbackRoutes;
