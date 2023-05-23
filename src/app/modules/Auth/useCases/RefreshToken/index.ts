import {
  ACCESS_TOKEN_EXPIRATION,
  REFRESH_TOKEN_EXPIRATION,
} from '../../../../constants/auth';
import AppError from '../../../../error';
import generateToken from '../../../../utils/generateToken';
import UserRepository from '../../../User/repositories/implementations/UserRepository';

export default async function RefreshToken(
  userId: string
): Promise<{ access: string; refresh: string }> {
  const findUser = await UserRepository.findById(userId);
  if (!findUser) throw new AppError('User not found!', 404);

  const accessToken = generateToken(findUser.id, ACCESS_TOKEN_EXPIRATION);
  const refreshToken = generateToken(findUser.id, REFRESH_TOKEN_EXPIRATION);

  return {
    refresh: refreshToken,
    access: accessToken,
  };
}
