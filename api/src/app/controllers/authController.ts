import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import generateToken from '../../utils/generateToken';

class AuthController {
  async register(req: Request, res: Response) {
    const { email } = req.body;

    try {
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: 'User already exists' });
      }

      const user = await User.create(req.body);

      user.password = '';

      return res.send({ user, token: generateToken(user._id) });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: 'Registration failed' });
    }
  }

  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(401).send({ error: 'User not found' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: 'Invalid' });
    }

    user.password = '';

    res.send({ user, token: generateToken(user._id) });
  }
}

export default new AuthController();
