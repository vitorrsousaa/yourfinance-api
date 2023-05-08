import { Request, Response } from 'express';

import CreateFeedback from '../useCases/Create';

class FeedbackController {
  async create(request: Request, response: Response) {
    const {
      title,
      description,
      feedbackCategoryId,
    } = request.body;

    const create = await CreateFeedback({
      title,
      description,
      feedbackCategoryId,
      userId: request.user.id
    });

    return response.status(201).json(create);  }
}

export default new FeedbackController();
