import { Request, Response } from 'express';

import ChangePassword from '../useCases/ChangePassword';

class UserController {
  async updatePassword(request: Request, response: Response) {
    await ChangePassword(
      request.body, request.user.id
    );

    return response.sendStatus(204);
  }
}

export default new UserController();
