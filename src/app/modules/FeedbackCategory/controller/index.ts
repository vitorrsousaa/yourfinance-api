import { Request, Response } from 'express';
import CreateFeedbackCategory from '../useCases/Create';
import FindFeedbackCategoryById from '../useCases/FindById';
import FindManyFeedbackCategories from '../useCases/FindManyFeedbackCategories';

class FeedbackCategoryController {
  async create(request: Request, response: Response) {
    const create = await CreateFeedbackCategory(request.body.name);

    return response.status(201).json(create);
  }

  async findById(request: Request, response: Response) {
    const find = await FindFeedbackCategoryById(request.params.id);

    return response.status(200).json(find);
  }

  async findMany(request: Request, response: Response) {
    const find = await FindManyFeedbackCategories();

    return response.status(200).json(find);
  }
}

export default new FeedbackCategoryController();
