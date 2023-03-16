import { Request, Response } from 'express';
import Delete from '../useCases/Delete';
import FindAll from '../useCases/FindAll';
import Register from '../useCases/Register';

class CategoryController {
  async store(request: Request, response: Response) {
    const { name } = request.body;

    const category = await Register(name, request.body);

    return response.send(category);
  }

  async index(request: Request, response: Response) {
    const categories = await FindAll();

    return response.send(categories);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await Delete(id);

    return response.sendStatus(204);
  }
}

export default new CategoryController();
