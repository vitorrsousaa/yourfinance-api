import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from '../../../../constants/auth';
import { TUser } from '../../../../entities/user/TUser';
import AppError from '../../../../error';
import Crypt from '../../../../providers/Crypt';
import generateToken from '../../../../utils/generateToken';
import UserRepository from '../../../User/repositories/implementations/UserRepository';

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
  const newUser = await UserRepository.create({name, email, password: hashedPassword});
  newUser.password = '';

  return {
    user: newUser,
    token: {
      access: generateToken(newUser.id, ACCESS_TOKEN_EXPIRATION),
      refresh: generateToken(newUser.id, REFRESH_TOKEN_EXPIRATION),
    },
  };
}
