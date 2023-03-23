import generateToken from '../../../../utils/generateToken';
import AppError from '../../../../error';
import Crypt from '../../../../providers/Crypt';
import UserRepository from '../../../User/repositories/implementations/UserRepository';
import { TUser } from '../../../User/model';

export default async function Authenticate(
  email: string,
  password: string
): Promise<{ user: TUser, token: string }> {
  const findUser = await UserRepository.findByEmail(email);

  if (!findUser) {
    throw new AppError('User not found', 404);
  }

  if (!(await Crypt.matchPassword(password, findUser.password)))
    throw new AppError('User not found!');

  findUser.password = '';

  return {
    user: findUser,
    token: generateToken(findUser._id),
  };
}
