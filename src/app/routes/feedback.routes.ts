import { Router } from 'express';

import FeedbackController from '../modules/Feedback/controller';

const feedbackRoutes = Router();

feedbackRoutes.post('/', FeedbackController.create);
feedbackRoutes.get('/', FeedbackController.index);

export default feedbackRoutes;
