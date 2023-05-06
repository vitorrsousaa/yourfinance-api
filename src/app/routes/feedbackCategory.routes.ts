import { Router } from 'express';

import FeedbackCategoryController from '../modules/FeedbackCategory/controller';

const feedabckCategoryRoutes = Router();

feedabckCategoryRoutes.post('/', FeedbackCategoryController.create);
feedabckCategoryRoutes.get('/:id', FeedbackCategoryController.findById);
feedabckCategoryRoutes.get('/', FeedbackCategoryController.findMany);

export default feedabckCategoryRoutes;
