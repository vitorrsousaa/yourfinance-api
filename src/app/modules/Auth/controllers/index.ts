import { Request, Response } from 'express';

import Authenticate from '../useCases/Authenticate';
import RefreshToken from '../useCases/RefreshToken';
import Register from '../useCases/Register';

class AuthController {
  async register(request: Request, response: Response) {
    const { email, name, password } = request.body;

    const create = await Register(email, name, password);

    return response.status(201).send(create);
  }

  async authenticate(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticate = await Authenticate(email, password);

    return response.status(200).send(authenticate);
  }

  async refreshToken(request: Request, response: Response) {
    const refresh = await RefreshToken(request.user.id);

    return response.status(200).json(refresh);
  }
}

export default new AuthController();
