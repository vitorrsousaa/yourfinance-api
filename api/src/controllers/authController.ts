import { Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth.json';

function generateToken(id: string) {
  return jwt.sign({ id: id }, authConfig.secret, {
    expiresIn: 86400,
  });
}

class AuthController {
  async register(req: Request, res: Response) {
    const { email } = req.body;

    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: 'User already exists' });
      }

      const user = await User.create(req.body);

      user.password = '';

      return res.send({ user, token: generateToken(user._id.toString()) });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: 'Registration failed' });
    }
  }
}

export default new AuthController();
