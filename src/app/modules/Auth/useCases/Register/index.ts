import generateToken from '../../../../utils/generateToken';
import AppError from '../../../../error';
import UserRepository from '../../../User/repositories/implementations/UserRepository';
import { TUser } from '../../../User/model';

export default async function Register(
  email: string,
  name: string,
  password: string
): Promise<{ user: TUser, token: string }> {
  const userExists = await UserRepository.findByEmail(email);

  if (userExists) {
    throw new AppError('User already exists');
  }

  const newUser = await UserRepository.create(name, email, password);
  newUser.password = '';

  return {
    user: newUser,
    token: generateToken(newUser._id),
  };
}