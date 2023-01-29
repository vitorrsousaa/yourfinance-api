import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import generateToken from '../../utils/generateToken';
import UsersRepository from '../repositories/UsersRepository';

class AuthController {
  async register(req: Request, res: Response) {
    const { email, name, password } = req.body;

    try {
      const userExists = await UsersRepository.findByEmail(email);

      if (userExists) {
        return res.status(400).send({ error: 'User already exists' });
      }

      const newUser = await UsersRepository.create(name, email, password);

      newUser.password = '';

      return res.send({ newUser, token: generateToken(newUser._id) });
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: 'Registration failed' });
    }
  }

  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await UsersRepository.findByEmail(email).select('+password');

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
