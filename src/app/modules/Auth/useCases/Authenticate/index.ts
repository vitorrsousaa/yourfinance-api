import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from '../../../../constants/auth';
import { TUser } from '../../../../entities/user/TUser';
import AppError from '../../../../error';
import Crypt from '../../../../providers/Crypt';
import generateToken from '../../../../utils/generateToken';
import UserRepository from '../../../User/repositories/implementations/UserRepository';

export default async function Authenticate(
  email: string,
  password: string
): Promise<{ user: TUser; token: { access: string; refresh: string } }> {
  const findUser = await UserRepository.findByEmail(email);

  if (!findUser) throw new AppError('Usuário não encontrado', 404);

  const matchPassword = await Crypt.matchPassword(password, findUser.password);

  if (!matchPassword) throw new AppError('Usuário não encontrado!');

  findUser.password = '';

  return {
    user: findUser,
    token: {
      access: generateToken(findUser.id, ACCESS_TOKEN_EXPIRATION),
      refresh: generateToken(findUser.id, REFRESH_TOKEN_EXPIRATION),
    },
  };
}
