import { Request, Response } from 'express';

import CreateFeedback from '../useCases/Create';
import FindAll from '../useCases/FindAll';

class FeedbackController {
  async create(request: Request, response: Response) {
    const { title, description } = request.body;

    const create = await CreateFeedback({
      title,
      description,
      userId: request.user.id,
    });

    return response.status(201).json(create);
  }

  async index(request: Request, response: Response) {
    const findAll = await FindAll();

    return response.status(200).json(findAll);
  }
}

export default new FeedbackController();
