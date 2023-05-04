import generateToken from '../../../../utils/generateToken';
import AppError from '../../../../error';
import UserRepository from '../../../User/repositories/implementations/UserRepository';
import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from '../../../../constants/auth';
import Crypt from '../../../../providers/Crypt';
import { TUser } from '../../../../entities/user/TUser';

export default async function Register(
  email: string,
  name: string,
  password: string
): Promise<{ user: TUser; token: { access: string; refresh: string } }> {
  const userExists = await UserRepository.findByEmail(email);

  if (userExists) {
    throw new AppError('Este email já está em uso!');
  }

  const hashedPassword = await Crypt.hash(password);
  const newUser = await UserRepository.create(name, email, hashedPassword);
  newUser.password = '';

  return {
    user: newUser,
    token: {
      access: generateToken(newUser.id, ACCESS_TOKEN_EXPIRATION),
      refresh: generateToken(newUser.id, REFRESH_TOKEN_EXPIRATION),
    },
  };
}
