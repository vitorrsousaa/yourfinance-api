import express, { Request, Response } from 'express';
import { User } from '../models/user';

const router = express.Router();

async function Register(req: Request, res: Response) {
  try {
    const { email, password, name } = req.body;

    const user = await User.create({ email, password, name });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
}

router.post('/auth/register', Register);

export default router;
