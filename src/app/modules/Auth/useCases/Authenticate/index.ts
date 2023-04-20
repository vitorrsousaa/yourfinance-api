import generateToken from '../../../../utils/generateToken';
import AppError from '../../../../error';
import Crypt from '../../../../providers/Crypt';
import UserRepository from '../../../User/repositories/implementations/UserRepository';
import { TUser } from '../../../User/model';
import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from '../../../../constants/auth';

export default async function Authenticate(
  email: string,
  password: string
): Promise<{ user: TUser; token: { access: string; refresh: string } }> {
  const findUser = await UserRepository.findByEmail(email);

  if (!findUser) {
    throw new AppError('Usuário não encontrado', 404);
  }

  if (!(await Crypt.matchPassword(password, findUser.password)))
    throw new AppError('Usuário não encontrado!');

  findUser.password = '';

  return {
    user: findUser,
    token: {
      access: generateToken(findUser._id, ACCESS_TOKEN_EXPIRATION),
      refresh: generateToken(findUser._id, REFRESH_TOKEN_EXPIRATION),
    },
  };
}
