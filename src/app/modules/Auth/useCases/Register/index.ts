import generateToken from '../../../../utils/generateToken';
import AppError from '../../../../error';
import UserRepository from '../../../User/repositories/implementations/UserRepository';
import { TUser } from '../../../User/model';
import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from '../../../../constants/auth';

export default async function Register(
  email: string,
  name: string,
  password: string
): Promise<{ user: TUser; token: { access: string; refresh: string } }> {
  const userExists = await UserRepository.findByEmail(email);

  if (userExists) {
    throw new AppError('Este email já está em uso!');
  }

  const newUser = await UserRepository.create(name, email, password);
  newUser.password = '';

  return {
    user: newUser,
    token: {
      access: generateToken(newUser._id, ACCESS_TOKEN_EXPIRATION),
      refresh: generateToken(newUser._id, REFRESH_TOKEN_EXPIRATION),
    },
  };
}
