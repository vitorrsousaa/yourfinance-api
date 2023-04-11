import AppError from '../../../../error';
import generateToken from '../../../../utils/generateToken';
import UserRepository from '../../../User/repositories/implementations/UserRepository';

export default async function RefreshToken(userId: string): Promise<{ token: string }> {
  const findUser = await UserRepository.findById(userId);
  if (!findUser) throw new AppError('User not found!', 404);

  const refreshToken = generateToken(findUser.id);

  return {
    token: refreshToken
  };
}
